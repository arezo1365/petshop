import React from 'react'
import ourteam from "../assets/ourteam/team-10-249x249.jpg"
import ourteam1 from "../assets/ourteam/team-8-249x249.jpg"
import ourteam2 from "../assets/ourteam/team-9-249x249.jpg"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SocialIconLink from './SocialIconLink';
import { FaFacebookF } from 'react-icons/fa';
import { ImTwitter  } from 'react-icons/im';
import { ImInstagram } from 'react-icons/im';
import { GrGooglePlus } from 'react-icons/gr';


export default function OurTeamHome() {
  return (
    <>
    
   
    <Swiper
      
       // install Swiper modules
       modules={[Pagination,A11y]}
       spaceBetween={30}
       
       slidesPerView={1}
       
       pagination={{ clickable: true }}
       breakpoints={{
        0: {
            slidesPerView: 0,
        },
        400:{
            slidesPerView:1,
        },
        639: {
            slidesPerView: 2,
        },
       
      
        995:{
            slidesPerView:3,

        },
        1200:{
            slidesPerView:3,
       
        }}   }
    >
      <SwiperSlide>
          <section>
            <article className='team-creative'>
              <div className="team-creative-header">
                <a href="" className='team-creative-figure object-fit-cover'>
                  <img src={ourteam} alt="" />
                </a>
              </div>
              <div className="team-creative-body">
                <h4 className="team-creative-name">
                  <a href="">Steve Ruffalo</a>
                </h4>
                <p className='team-creative-text'>Steve is the leading groomer at Tarian. He is always ready to make your pet look and feel good.
                </p>
                <ul className='list-unstyled d-flex justify-content-center align-items-center' id="ourteam-socials">
                <li> 
                <SocialIconLink  url={"https://www.facebook.com"}>
                  <FaFacebookF />
                </SocialIconLink>
                 
                </li>
                <li>
                <SocialIconLink  url={"https://www.facebook.com"}>
                  <ImTwitter />
                </SocialIconLink>
                </li>
                <li>
                <SocialIconLink  url={"https://www.facebook.com"}>
                  <ImInstagram/>
                </SocialIconLink>
                
                </li>
                <li>
                <SocialIconLink  url={"https://www.facebook.com"}>
                  <GrGooglePlus/>
                </SocialIconLink>
               
                </li>
              
              </ul>
              </div>

            </article>
          </section>
      </SwiperSlide>
      <SwiperSlide>
          <section>
            <article className='team-creative'>
              <div className="team-creative-header">
                <a href="" className='team-creative-figure object-fit-cover'>
                  <img src={ourteam1} alt="" />
                </a>
              </div>
              <div className="team-creative-body">
                <h4 className="team-creative-name">
                  <a href="">Steve Ruffalo</a>
                </h4>
                <p className='team-creative-text'>Steve is the leading groomer at Tarian. He is always ready to make your pet look and feel good.
                </p>
                <ul className='list-unstyled d-flex justify-content-center align-items-center' id="ourteam-socials">
                <li> 
                <SocialIconLink  url={"https://www.facebook.com"}>
                  <FaFacebookF />
                </SocialIconLink>
                 
                </li>
                <li>
                <SocialIconLink  url={"https://www.facebook.com"}>
                  <ImTwitter/>
                </SocialIconLink>
                </li>
                <li>
                <SocialIconLink  url={"https://www.facebook.com"}>
                  <ImInstagram/>
                </SocialIconLink>
                
                </li>
                <li>
                <SocialIconLink  url={"https://www.facebook.com"}>
                  <GrGooglePlus/>
                </SocialIconLink>
               
                </li>
              
                </ul>
              </div>

            </article>
          </section>
      </SwiperSlide>
      
      <SwiperSlide>
          <section>
            <article className='team-creative'>
              <div className="team-creative-header">
                <a href="" className='team-creative-figure object-fit-cover'>
                  <img src={ourteam2} alt="" />
                </a>
              </div>
              <div className="team-creative-body">
                <h4 className="team-creative-name">
                  <a href="">Steve Ruffalo</a>
                </h4>
                <p className='team-creative-text'>Steve is the leading groomer at Tarian. He is always ready to make your pet look and feel good.
                </p>
                <ul className='list-unstyled d-flex justify-content-center align-items-center' id="ourteam-socials">
                <li> 
                <SocialIconLink  url={"https://www.facebook.com"}>
                  <FaFacebookF />
                </SocialIconLink>
                 
                </li>
                <li>
                <SocialIconLink  url={"https://www.facebook.com"}>
                  <ImTwitter/>
                </SocialIconLink>
                </li>
                <li>
                <SocialIconLink  url={"https://www.facebook.com"}>
                  <ImInstagram/>
                </SocialIconLink>
                
                </li>
                <li>
                <SocialIconLink  url={"https://www.facebook.com"}>
                  <GrGooglePlus/>
                </SocialIconLink>
               
                </li>
              
                </ul>
              </div>

            </article>
          </section>
      </SwiperSlide>
    </Swiper>

      
    </>
    
    
  )
}
