import React, {useState,useEffect} from 'react'
import ProgressBar from '../Progressbar'
import {MintButtonWrapper, MintingContainer, Title, BatchesWrapper, BatchCard, EthIcon} from "./MintingAreaElements"
import ethIcon from "../../images/eth-icon.png"
import { useMediaQuery } from 'react-responsive'

function MintingArea({mintedNumber}) {
  let valueProgress1
  let valueProgress2
  let valueProgress3
  
  if(mintedNumber < 3000){
    valueProgress1 = ((mintedNumber/3000)*100)
    valueProgress2 = 0
    valueProgress3 = 0
  } else if(2999 < mintedNumber < 9000 ){
    valueProgress1 = 100
    valueProgress2 = (((mintedNumber-2999)/6000)*100)
    valueProgress3 = 0
  } else if(9000 < mintedNumber < 10000){
    valueProgress1 = 100
    valueProgress2 = 100
    valueProgress3 = (((mintedNumber-8999)/1000)*100)
  }

  let needsJump = useMediaQuery({query:"(max-width: 1090px)"})


  return (
    <>
      <MintingContainer >
        <Title> BATCH QUANTITY</Title>
        <BatchesWrapper>
          <BatchCard>
            <h3>0 to 2.999 {needsJump && <br></br>}NFTs</h3>
            <ProgressBar valueProgress={valueProgress1}/>
            <MintButtonWrapper>
              <EthIcon src={ethIcon}/>
              <h4>0.1 ETH</h4>
            </MintButtonWrapper>
          </BatchCard>
          <BatchCard>
            <h3>3000 to 8.999 {needsJump && <br></br>} NFTs</h3>
            <ProgressBar valueProgress={valueProgress2}/>
            <MintButtonWrapper>
              <EthIcon src={ethIcon}/>
              <h4>0.2 ETH</h4>
            </MintButtonWrapper>
          </BatchCard>
          <BatchCard style={{paddingRight:"0"}}>
            <h3>9000 to 9999 {needsJump && <br></br>} NFTs</h3>
            <ProgressBar valueProgress={valueProgress3}/>
            <MintButtonWrapper>
              <EthIcon src={ethIcon}/>
              <h4>0.3 ETH</h4>
            </MintButtonWrapper>
          </BatchCard>
        </BatchesWrapper>

      </MintingContainer>
    </>
  )
}

export default MintingArea