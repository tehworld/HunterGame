import React from 'react'
import {RoadMapContainer, RoadMapImage, TimerWrapper, Subtitle,
RoadMapStagesWrapper, RoadMapCardContainer, StageCardWrapper} from "./RoadMapElements"
import countdownImage from "../../images/countdown-map.png"
import line from "../../images/line.png"
import point from "../../images/point.png"
import CountDownTimer from '../CountdownTimer'




function RoadMap() {

  const daysHoursMinSecs = {dy:1, hours:1, minutes:20, seconds:40}

  return (
    <>
    <RoadMapContainer>
      <TimerWrapper >
        <CountDownTimer daysHoursMinSecs={daysHoursMinSecs} />
      </TimerWrapper>
      <Subtitle></Subtitle>
      <RoadMapStagesWrapper>
        <RoadMapCardContainer>
          <h3>11:00 UTC</h3>
          <img src={point} alt="point" />
          <img src={line} alt="line" />
          <StageCardWrapper>Hotbit IEO <br/> Bounce/wbstarter IDO</StageCardWrapper>
        </RoadMapCardContainer>
        <RoadMapCardContainer>
          <h3>12:00 UTC</h3>
          <img src={point} alt="point" />
          <img src={line} alt="line" />
          <StageCardWrapper>Sales Launch Date <br/> NFT Reveal Date</StageCardWrapper>
        </RoadMapCardContainer>
        <RoadMapCardContainer>
          <h3>13:00 UTC</h3>
          <img src={point} alt="point" />
          <img src={line} alt="line" />
          <StageCardWrapper>NFT Reveal Date</StageCardWrapper>
        </RoadMapCardContainer>
      </RoadMapStagesWrapper>
      {/* <RoadMapImage src = {countdownImage}/> */}
    </RoadMapContainer>
    
    
    </>
  )
}

export default RoadMap