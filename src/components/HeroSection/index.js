import React from 'react'
import {HeroContainer, HeroH1, H1Container, HeroImage, HeroImageContainer} from "./HeroSectionElements"
import HunterImageMobile from "../../images/heroImageMobile.png"
import HunterImageDesktop from "../../images/heroImageDesktop.png"
import { useMediaQuery } from 'react-responsive'

function HeroSection() {
  const isDesktopOrmobile = useMediaQuery({
    query: '(max-width: 768px)'
  })

  return (
    <>
      <HeroContainer>
      <H1Container>
          <HeroH1> A HUNTERS GAME</HeroH1>
        </H1Container>
        <HeroImageContainer>
          {isDesktopOrmobile ? <HeroImage src={HunterImageMobile} /> : <HeroImage src={HunterImageDesktop} style={{}} />}
        </HeroImageContainer>

        
      </HeroContainer>
    
    </>
  )
}

export default HeroSection