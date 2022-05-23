import React from 'react'
import {RoadMapContainer, RoadMapImage, TimerWrapper, Subtitle,
RoadMapStagesWrapper, RoadMapCardContainer, StageCardWrapper} from "./RoadMapElements"
import countdownImage from "../../images/countdown-map.png"
import line from "../../images/line.png"
import point from "../../images/point.png"
import CountDownTimer from '../CountdownTimer'




function RoadMap({daysHoursMinSecs}) {

  return (
    <>
    <RoadMapContainer>
      <TimerWrapper >
        <CountDownTimer daysHoursMinSecs={daysHoursMinSecs} />
      </TimerWrapper>
      <Subtitle>"This is just the beginning"</Subtitle>
      <RoadMapStagesWrapper>
        <RoadMapCardContainer>
        <h3>1st June 2022 <br></br> 12:00 UTC</h3>
          <img src={point} alt="point" />
          <img src={line} alt="line" style={{margin: "1rem 0"}}/>
          <StageCardWrapper>NFT Sales Launch</StageCardWrapper>
        </RoadMapCardContainer>
        <RoadMapCardContainer>
          <h3>31st September 2022 <br></br> 12:00 UTC</h3>
          <img src={point} alt="point" />
          <img src={line} alt="line" style={{margin: "1rem 0"}} />
          <StageCardWrapper> NFT Reveal Date</StageCardWrapper>
        </RoadMapCardContainer>
      </RoadMapStagesWrapper>
      {/* <RoadMapImage src = {countdownImage}/> */}
    </RoadMapContainer>
    
    
    </>
  )
}

export default RoadMap