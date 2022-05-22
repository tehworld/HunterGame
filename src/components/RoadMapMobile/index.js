import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import line from "../../images/line.png"
import point from "../../images/point.png"
import CountDownTimer from '../CountdownTimer';
import {Wrapper, RoadMapCardContainerMobile, StageCardWrapperMobile } from "./RoadMapMobileElements"
import { RoadMapCardContainer, StageCardWrapper, TimerWrapper, Subtitle } from '../RoadMap/RoadMapElements';

function RoadMapMobile({daysHoursMinSecs}) {
  return (
    <>
    <Wrapper>
    <TimerWrapper >
        <CountDownTimer daysHoursMinSecs={daysHoursMinSecs} />
      </TimerWrapper>
      <Subtitle style={{paddingBottom:"0.5rem", marginBottom:"1rem"}}>"This is just the beginning"</Subtitle>
    </Wrapper>
    
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
          <RoadMapCardContainerMobile>
          <h3>11:00 UTC</h3>
          <img src={point} alt="point" />
          <img src={line} alt="line" style={{margin: "1rem 0"}}/>
          <StageCardWrapperMobile>Hotbit IEO <br/> Bounce/wbstarter IDO</StageCardWrapperMobile>
        </RoadMapCardContainerMobile></SwiperSlide>
      <SwiperSlide>        
          <RoadMapCardContainerMobile>
          <h3>12:00 UTC</h3>
          <img src={point} alt="point" />
          <img src={line} alt="line" style={{margin: "1rem 0"}} />
          <StageCardWrapperMobile>Sales Launch Date <br/> NFT Reveal Date</StageCardWrapperMobile>
        </RoadMapCardContainerMobile></SwiperSlide>
      <SwiperSlide>
          <RoadMapCardContainerMobile>
          <h3>13:00 UTC</h3>
          <img src={point} alt="point" />
          <img src={line} alt="line" style={{margin: "1rem 0"}}/>
          <StageCardWrapperMobile>NFT Reveal Date <br /> Original Collection</StageCardWrapperMobile>
        </RoadMapCardContainerMobile></SwiperSlide>

    </Swiper>
    
    </>
  )
}

export default RoadMapMobile