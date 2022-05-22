import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import line from "../../images/line.png"
import point from "../../images/point.png"
import CountDownTimer from '../CountdownTimer';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"

import {RoadMapCardContainer, Subtitle, RoadMapContainer, StageCardWrapper, TimerWrapper } from '../RoadMap/RoadMapElements';

function RoadMapMobile({daysHoursMinSecs, slides}) {
  const [current, setCurrent] = useState(0)
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }


  const prevSlide = () => {
    setCurrent(current === 0  ? length-1 : current - 1)
  }  

  if (!Array.isArray(slides) || slides.length <= 0){
    return null;
  }
  return (
    <>
    <RoadMapContainer style={{background:"transparent"}}>
    <TimerWrapper >
        <CountDownTimer daysHoursMinSecs={daysHoursMinSecs} />
      </TimerWrapper>
      <Subtitle>"This is just the beginning"</Subtitle>


      
      <RoadMapCardContainer selected={selected} index={index} dangerouslySetInnerHTML={ {__html: item.answer}}></RoadMapCardContainer>

   
    </RoadMapContainer>
    
    
    
    </>
  )
}

export default RoadMapMobile