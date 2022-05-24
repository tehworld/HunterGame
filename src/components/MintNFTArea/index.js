import React,{useState} from 'react'
import ReactLoading from "react-loading"
import { StyledButton, MintingWrapper, MintingImageWrapper, MintingImage, MintingButtonContainer, LoadingWrapper } from './MintNFTElements'
import coverImage from "../../images/pre-reveal-cover.png"
import {getTotalNFTsMinted, mintNft, connectWallet} from "../../utils/web3Functions"
import {Title} from "../FAQ/FAQElements"
import ethIcon from "../../images/eth-icon.png"
import {EthIcon} from "../MintingArea/MintingAreaElements"
function MintNFT({smartContractAbi, smartContractAddress, setMintedNumber, walletAddress, setWalletAddress}) {

    const[isLoading, setIsLoading] = useState(false)
    let price

    const numberMinted = () => {
        getTotalNFTsMinted(smartContractAbi, smartContractAddress, setMintedNumber)
    }

    if(0 < numberMinted() < 3000){
        price =0.1
    } else if( 3000 < numberMinted() < 9000){
        price = 0.2
    } else if (9000 < numberMinted() <10000){
        price = 0.3
    }

    const mintNow = () =>{
         mintNft(smartContractAbi, smartContractAddress, setIsLoading, price)
    }

    const connectWalletHandler = () => {
        connectWallet(setWalletAddress)
      }

  return (
    <>
        <MintingWrapper>
            <Title>Mint your Hunter</Title>
            <MintingImageWrapper>
            <MintingImage src={coverImage}/>
            </MintingImageWrapper>

        <MintingButtonContainer>
        <EthIcon src={ethIcon}/>
        <h4>{`${price}`}</h4>
        {!walletAddress ? 
        <StyledButton onClick={connectWalletHandler} isLoading={isLoading}>Connect Wallet</StyledButton> :
        <StyledButton onClick={mintNow} isLoading={isLoading}> {isLoading === false ? 
        "Buy" : 
        <LoadingWrapper><ReactLoading type={"cylon"} color={"#57e2ad"} /></LoadingWrapper>}</StyledButton> }
            
        </MintingButtonContainer>
            
        </MintingWrapper>
    </>
  )
}

export default MintNFT