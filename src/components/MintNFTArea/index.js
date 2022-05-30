import React,{useState, useEffect} from 'react'
import ReactLoading from "react-loading"
import { Title, StyledButton, MintingWrapper, MintNumber, MintingButtonContainer, 
    LoadingWrapper, NumberControlWrapper, NumberControl, SuccessTextWrapper, OpenseaText } from './MintNFTElements'
import coverImage from "../../images/pre-reveal-cover.png"
import {getTotalNFTsMinted, mintNft, connectWallet} from "../../utils/web3Functions"

import ethIcon from "../../images/eth-icon.png"
import {EthIcon} from "../MintingArea/MintingAreaElements"
import {setupEventListener} from "../../utils/web3Functions"

function MintNFT({smartContractAbi, smartContractAddress, setMintedNumber, walletAddress, setWalletAddress}) {

    const[isLoading, setIsLoading] = useState(false)
    const [number, setNumber] = useState(0)
    let renderedTokenId
    let price

    const numberMinted = () => {
        getTotalNFTsMinted(smartContractAbi, smartContractAddress, setMintedNumber)
    }

    if(0 < numberMinted() < 3000){
        price = 0.1
    } else if( 3000 < numberMinted() < 9000){
        price = 0.2
    } else if (9000 < numberMinted() <10000){
        price = 0.3
    }

    const mintNow = () =>{
         mintNft(number, smartContractAbi, smartContractAddress, setIsLoading, (price*number).toFixed(2))
    }

    const connectWalletHandler = () => {
        connectWallet(setWalletAddress)
      }

    const addNumber = () => {
        if(number < 5){
            setNumber(number + 1)
        }
        else {
            setNumber(5)
        }
        
    }

    const substractNumber = () => {
    if(number > 0){
        setNumber(number - 1)
    } else {
        setNumber(0)
    }
    }

    
   
    useEffect(() => {
     setupEventListener(smartContractAbi, setWalletAddress, renderedTokenId)
    }, [walletAddress, smartContractAbi, smartContractAddress, renderedTokenId, setWalletAddress])

  return (
    <>
        <MintingWrapper id="mint">
            <Title style={{marginBottom:"2rem"}}>MINT YOUR HUNTER</Title>
            <MintNumber>{number}</MintNumber>
            <NumberControlWrapper>
                <NumberControl onClick={substractNumber}>-</NumberControl>
                <NumberControl onClick={addNumber}>+</NumberControl>
            </NumberControlWrapper>
            
        <MintingButtonContainer>
            <EthIcon src={ethIcon}/>
            <h4 style={{fontSize:"20px"}}>{`${(price*number).toFixed(1)} ETH`}</h4>
            {!walletAddress ? 
            <StyledButton onClick={connectWalletHandler} isLoading={isLoading}>Mint</StyledButton> 
            :
            <StyledButton onClick={mintNow} isLoading={isLoading}> {isLoading === false ? 
            "Mint" : 
            <LoadingWrapper><ReactLoading type={"cylon"} color={"#57e2ad"} /></LoadingWrapper>}
            </StyledButton> }
        </MintingButtonContainer>
        { renderedTokenId ?
        <SuccessTextWrapper><p>Success! NFT Minted. </p> <br></br><OpenseaText>See in
                       <a style = {{color:"white"}} href={`https://opensea.io/assets/${smartContractAddress}/${renderedTokenId}`}> Opensea</a></OpenseaText></SuccessTextWrapper>
                        : "" }
            
        </MintingWrapper>
    </>
  )
}

export default MintNFT