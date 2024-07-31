import React from 'react'
import feature1 from "../assets/featured/about-1-370x276.jpg"
import feature2 from "../assets/featured/about-2-370x276.jpg"
import feature3 from "../assets/featured/about-3-370x276.jpg"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function FeaturedHome() {
  return (
    <Swiper
        // install Swiper modules
        modules={[Pagination,A11y]}
        spaceBetween={30}
        // speed={900}
        // autoplay={{
        //     delay:"3000",
        // }}
        slidesPerView={1}
        
        pagination={{ clickable: true }} 
     
        breakpoints={{
            0: {
                slidesPerView: 0,
            },
            344:{
                slidesPerView:1,
            },
            400:{
                slidesPerView:1,
            },
            639: {
                slidesPerView: 2,
            },
          
            995:{
                slidesPerView:3,
                spaceBetween:70,

            },
            1200:{
                slidesPerView:3,
           
            }
        }}
         
        
    >
        <SwiperSlide>
            <section>
                <article className='box-info-modern wow slideInUp'>
                    <a href="" className='box-info-modern-figure link-img'>
                        <img src={feature1} alt=""/>
                    </a>
                    <h4 className='box-info-modern-title'>
                        <a href="">Best pets clothing</a>
                    </h4>
                    <a href="" className='box-info-modern-link'>more</a>
                   
               </article>
               
            </section>
            
        </SwiperSlide>
        <SwiperSlide>
            <section>
                <article className='box-info-modern wow slideInUp'>
                    <a href="" className='box-info-modern-figure link-img'>
                        <img src={feature2} alt=""/>
                    </a>
                    <h4 className='box-info-modern-title'>
                        <a href="">Best pets clothing</a>
                    </h4>
                    <a href="" className='box-info-modern-link'>more</a>
                    
                    
               </article>
               
            </section>
            
        </SwiperSlide>
        <SwiperSlide>
            <section>
                <article className='box-info-modern wow slideInUp'>
                    <a href="" className='box-info-modern-figure link-img'>
                        <img src={feature3} alt=""/>
                    </a>
                    <h4 className='box-info-modern-title'>
                        <a href="">Best pets clothing</a>
                    </h4>
                    <a href="" className='box-info-modern-link'>more</a>
                    
                    
               </article>
               
            </section>
            
        </SwiperSlide>
    </Swiper>
   
  )
}
