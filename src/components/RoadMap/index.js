import React from 'react'
import {RoadMapContainer, RoadMapImage} from "./RoadMapElements"
import countdownImage from "../../images/countdown-map.png"



function RoadMap() {
  return (
    <>
    <RoadMapContainer>
      <RoadMapImage src = {countdownImage}/>
    </RoadMapContainer>
    
    
    </>
  )
}

export default RoadMap