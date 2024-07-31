import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Thumbs, FreeMode } from "swiper/modules";

// import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

 

export default function AboutSwiper({ pics, thunbs }) {
 
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode,Navigation, Thumbs]}
        // autoplay={{
        //   "delay": 100,
        //   "disableOnInteraction": false
        // }}
       
        className='mySwiper2'>
        {pics.map((pic, i) => (
          <SwiperSlide key={i}>
            <img src={pic} style={{ width: '100%', height: 'auto'}} />
            {/* className='w-100 vh-100 object-fit-cover ' */}
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
      //   breakpoints={{
      //     0: {
      //         slidesPerView: 0,
      //     },
      //     344:{
      //         slidesPerView:1,
      //     },
      //     400:{
      //         slidesPerView:1,
      //     },
      //     639: {
      //         slidesPerView: 2,
      //     },
        
      //     995:{
      //         slidesPerView:3,
      //         spaceBetween:70,

      //     },
      //     1200:{
      //         slidesPerView:4,
      //         spaceBetween:30
      //     },
      //     1300:{
      //       slidesPerView:4,
      //         spaceBetween:30
      //     }
      // }}
       
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        wrapperClass='d-flex '
        // flex-column p-4 w-50
        className='mySwiper '>
           {/* position-absolute  top-50 end-0  translate-middle-y */}
        {thunbs.map((thunb, i) => (
          <SwiperSlide className='my-3' key={i} style={{margin:'0px'}}>
            <img src={thunb} style={{ width: '100%', height: "auto"}} />
            {/* className='rounded-circle' */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
