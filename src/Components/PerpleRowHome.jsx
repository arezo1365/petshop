import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import perple4 from "../assets/perple/clients-4-122x92.png"
import perple5 from "../assets/perple/clients-5-112x112.png"
import perple1 from "../assets/perple/clients-1-120x114.png"
import perple2 from "../assets/perple/clients-2-105x118.png"
import perple3 from "../assets/perple/clients-3-111x98.png"


export default function PerpleRowHome() {
  return (
    <Swiper
    modules={[Pagination,A11y]}
    spaceBetween={30}
    
    slidesPerView={1}
    
    pagination={{ clickable: true }}
    breakpoints={{
          0: {
              slidesPerView: 0,
          },
          400:{
              slidesPerView:2,
          },
          570:{
            slidesPerView:3,
          },
          700:{
            slidesPerView:4,
          },
          900:{
            slidesPerView:5,
            
          },
          1200:{
            slidesPerView:5,
          }    
     
       }}>
        <SwiperSlide>
          <section>
            <article className="perple-article-home">
              <a href="">
              <img src={perple4} alt="" />
              </a>
              
            </article>  
          </section>
          
            
        </SwiperSlide>
        <SwiperSlide>
          <section>
            <article className="perple-article-home">
              <a href="">
                <img src={perple5} alt="" />
                </a>
              
          
            </article>  
          </section>
          
            
        </SwiperSlide>
        <SwiperSlide>
          <section>
            <article className="perple-article-home">
              <a href="">
                <img src={perple1} alt="" />
              </a>
              
              
            </article>  
          </section>
          
            
        </SwiperSlide>
        <SwiperSlide>
          <section>
            <article className="perple-article-home">
             <a href="">
              <img src={perple2} alt="" />
             </a>
              
            </article>  
          </section>
          
            
        </SwiperSlide>
        <SwiperSlide>
          <section>
            <article className="perple-article-home">
              <a href="">
                <img src={perple3} alt="" />
              </a>
            </article>  
          </section>
          
            
        </SwiperSlide>

    </Swiper>
  )
}
