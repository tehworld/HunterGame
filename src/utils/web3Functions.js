import { ethers } from "ethers";

//Implement method to connect wallet
export const connectWallet = async(setWalletAddress) => {
    try {
      const { ethereum } = window;
      if(!ethereum) {
        alert("Get Metamask");
        return;
      }

      let chainId = await ethereum.request({ method: 'eth_chainId' });
      console.log("Connected to chain " + chainId);
  
        // String, hex code of Mainnet
      const mainnetChainId = "0x1"; 
      if (chainId !== mainnetChainId) {
        alert("You are not connected to Ethereum Mainnet!");
      }
      //method to request access to account
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      //And then we print out the public address of the wallet
      console.log(`connected: ${accounts[0]}`);
      setWalletAddress(accounts[0]);
      // Setup listener! This is for the case where a user comes to our site
      // and connected their wallet for the first time.
    
    } catch(error) {
      console.log(error)
    }
  }

 export const mintNft = async (number, smartContractAbi, smartContractAddress, setIsLoading, price) => {

    try {
      const { ethereum } = window;
      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(smartContractAddress, smartContractAbi.abi, signer);
        console.log("Going to pop wallet now to pay gas...")

        let nftTxn = await connectedContract.mintNFTs(number, {value: ethers.utils.parseEther(`${price}`)});

        console.log("Mining...please wait")

        setIsLoading(true)
        await nftTxn.wait();
        console.log(`Mined, see transaction: http://etherscan.io/tx/${nftTxn.hash}`);
        
        setIsLoading(false)
        //getTotalNFTsMintedSoFar();

      } else {
        console.log("Ethereum object doesn´t exist");
      }
    } catch(error) {
      console.log(error)
    }
  }

  export const checkIfWalletIsConnected = async (setWalletAddress) => {
    //Make sure if we are connected
    const { ethereum } = window;

    if(!ethereum) {
      console.log("Make sure you have Metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum)
    }
    //Check if we are authorized to access the user´s wallet
    const accounts = await ethereum.request({method:"eth_accounts"});

    //users can have multiple accounts, we grab the first one
    if (accounts.length !== 0) {

      const account = accounts[0];
      console.log(`Found an authorized account ${account}`);
      setWalletAddress(account)

      // Setup listener. This is for the case where a user comes to our site
      // and ALREADY had their wallet connected + authorized.
      //setupEventListener()
    } else {
      console.log("No authorized account found")
    }  
  }

  export const setupEventListener = async (smartContractAbi, smartContractAddress, RenderedTokenId) => {

    //most of this looks as our function mintNFT
    try {
      const {ethereum } = window;

      if(ethereum) {
        //Same stuff again
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(smartContractAddress,     
          smartContractAbi.abi, signer);

        //This is the important part
        //We "capture" the event that the contract emits
        connectedContract.on("NFTMinted", (number, tokenId, from) => {
          console.log(from, tokenId.toNumber())
          RenderedTokenId = tokenId.toNumber()
        
          

        });
        console.log("Setting up event Listener!")
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (error) {
      console.log(error)
    }
  }

  export const getTotalNFTsMinted = async (smartContractAbi, smartContractAddress, setMintedNumber) => {
    try {
      const { ethereum } = window;
      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(smartContractAddress, smartContractAbi.abi, signer);

        console.log("Checking Number of Minted NFTS on Collection")

        let nftNumber = await connectedContract.getCurrentId();
        setMintedNumber(parseInt(nftNumber,10))

        console.log(`Total NFT´s Minted so far: ${parseInt(nftNumber,10)}`);

        return nftNumber

      } else {
        console.log("Ethereum object doesn´t exist");
      }
    } catch(error) {
      console.log(error)
    }
  }
