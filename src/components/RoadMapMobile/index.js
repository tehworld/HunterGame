import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import line from "../../images/line.png"
import point from "../../images/point.png"

import { RoadMapCardContainer, StageCardWrapper } from '../RoadMap/RoadMapElements';

function RoadMapMobile() {
  return (
    <>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={true}
      modules={[Pagination]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
          <RoadMapCardContainer>
          <h3>11:00 UTC</h3>
          <img src={point} alt="point" />
          <img src={line} alt="line" style={{margin: "1rem 0"}}/>
          <StageCardWrapper>Hotbit IEO <br/> Bounce/wbstarter IDO</StageCardWrapper>
        </RoadMapCardContainer></SwiperSlide>
      <SwiperSlide>        
          <RoadMapCardContainer>
          <h3>12:00 UTC</h3>
          <img src={point} alt="point" />
          <img src={line} alt="line" style={{margin: "1rem 0"}} />
          <StageCardWrapper>Sales Launch Date <br/> NFT Reveal Date</StageCardWrapper>
        </RoadMapCardContainer></SwiperSlide>
      <SwiperSlide>
          <RoadMapCardContainer>
          <h3>13:00 UTC</h3>
          <img src={point} alt="point" />
          <img src={line} alt="line" style={{margin: "1rem 0"}}/>
          <StageCardWrapper>NFT Reveal Date <br /> Original Collection</StageCardWrapper>
        </RoadMapCardContainer></SwiperSlide>

    </Swiper>
    
    </>
  )
}

export default RoadMapMobile