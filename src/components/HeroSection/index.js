import React from 'react'
import {HeroContainer, HeroH1} from "./HeroSectionElements"
import  MediaQuery from "react-responsive";


function HeroSection() {


  return (
    <>
      <HeroContainer>
      <MediaQuery maxDeviceWidth={768} >
          <HeroH1> A HUNTERS GAME</HeroH1>
      </MediaQuery>

        
      </HeroContainer>
    
    </>
  )
}

export default HeroSection