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
import gallery6 from "../../images/gallery6.png"
import gallery7 from "../../images/gallery7.png"
import gallery8 from "../../images/gallery8.png"
import gallery9 from "../../images/gallery9.png"
import gallery10 from "../../images/gallery10.png"



function Gallery() {

  return (
    <div style={{paddingTop:"3rem"}} id="gallery">
      <Swiper 
      spaceBetween={10}
      loop={true}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{

        1100: {
          slidesPerView:3,
        },
        
        768: {
          slidesPerView: 2,
        },

        500:{
          slidePerView: 1,
        },
      }}
    >
      <SwiperSlide><GalleryImage src={gallery1} /></SwiperSlide>
      <SwiperSlide><GalleryImage src={gallery2} /></SwiperSlide>
      <SwiperSlide><GalleryImage src={gallery3} /></SwiperSlide>
      <SwiperSlide><GalleryImage src={gallery4} /></SwiperSlide>
      <SwiperSlide><GalleryImage src={gallery5} /></SwiperSlide>
      <SwiperSlide><GalleryImage src={gallery6} /></SwiperSlide>
      <SwiperSlide><GalleryImage src={gallery7} /></SwiperSlide>
      <SwiperSlide><GalleryImage src={gallery8} /></SwiperSlide>
      <SwiperSlide><GalleryImage src={gallery9} /></SwiperSlide>
      <SwiperSlide><GalleryImage src={gallery10} /></SwiperSlide>
    </Swiper>
    
    </div>
  )
}

export default Gallery