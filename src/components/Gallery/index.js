import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";

import { GalleryImage } from './GalleryElements';
import gallery1 from "../../images/gallery1.png"
import gallery2 from "../../images/gallery2.png"
import gallery3 from "../../images/gallery3.png"
import gallery4 from "../../images/gallery4.png"
import gallery5 from "../../images/gallery5.png"



function Gallery() {

  return (
    <div style={{paddingTop:"3rem"}}>
      <Swiper
      spaceBetween={50}
   
      loop={true}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{

        1920: {
          slidesPerView:3,
        },
        
        768: {
         
          slidesPerView: 2,
        },
      }}
    >
      <SwiperSlide><GalleryImage src={gallery1} /></SwiperSlide>
      <SwiperSlide><GalleryImage src={gallery2} /></SwiperSlide>
      <SwiperSlide><GalleryImage src={gallery3} /></SwiperSlide>
      <SwiperSlide><GalleryImage src={gallery4} /></SwiperSlide>
      <SwiperSlide><GalleryImage src={gallery5} /></SwiperSlide>
    </Swiper>
    
    </div>
  )
}

export default Gallery