import React, {useState,useEffect} from 'react'
import ProgressBar from '../Progressbar'
import {MintButtonWrapper, MintingContainer, Title, BatchesWrapper, BatchCard, EthIcon} from "./MintingAreaElements"
import ethIcon from "../../images/eth-icon.png"
function MintingArea() {


// const [value, setValue] = useState(2000)



  return (
    <>
      <MintingContainer >
        <Title> BATCH QUANTITY</Title>
        <BatchesWrapper>
          <BatchCard>
            <h3>0 to 2.999 NFTs</h3>
            <ProgressBar valueProgress={33}/>
            <MintButtonWrapper>
              <EthIcon src={ethIcon}/>
              <h4>0.1 ETH</h4>
            </MintButtonWrapper>
          </BatchCard>
          <BatchCard>
            <h3>3000 to 8.999 NFTs</h3>
            <ProgressBar valueProgress={75}/>
            <MintButtonWrapper>
              <EthIcon src={ethIcon}/>
              <h4>0.2 ETH</h4>
            </MintButtonWrapper>
          </BatchCard>
          <BatchCard style={{paddingRight:"0"}}>
            <h3>9000 to 1000 NFTs</h3>
            <ProgressBar valueProgress={90}/>
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