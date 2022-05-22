import React from 'react'
import logosm from "../../images/logofooter.png"
import { FooterContainer, FooterLegal, FooterLegalWrapper, FooterLogo, FooterLogoWrapper } from './FooterElements'

function Footer() {
  return (
    <>
      <FooterContainer>

        <FooterLogoWrapper>
          <FooterLogo src={logosm} />
        </FooterLogoWrapper>

        <FooterLegalWrapper>
          <FooterLegal>HunterGame 2022 - ALL rights reserved</FooterLegal>
        </FooterLegalWrapper>

      </FooterContainer>
    
    
    </>
  )
}

export default Footer