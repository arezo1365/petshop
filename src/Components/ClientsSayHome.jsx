import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css';
import {  Pagination, A11y } from 'swiper/modules';
import 'swiper/css/pagination';
import {FaQuoteLeft} from "react-icons/fa"
import clientsay1 from "../assets/clientsay/user-5-62x62.jpg"
import clientsay2 from "../assets/clientsay/user-6-62x62.jpg"
import clientsay3 from "../assets/clientsay/user-10-62x62.jpg"
import clientsay4 from "../assets/clientsay/user-11-62x62.jpg"




export default function ClientsSayHome() {
  return (
    <>
    
        <Swiper
                       
                    // install Swiper modules
                    modules={[ Pagination, A11y]}
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
                       
                        1200:{
                            slidesPerView:2,
                       
                        }
                    }   }
                 
                >
                    
                    <SwiperSlide>
                        <div className="">
                            <article className="quote-carly quote-carly-1">
                                <div class="quote-carly-text">
                                    <FaQuoteLeft className='quote-carly-icon'/>
                                    <div className="q">
                                    I like the vast choice of cat food that this pet shop provides. Being a regular client here for 3 years, I am 100% satisfied by Tarian.
                                    </div>
                                 
                                </div>
                                <div className="quote-carly-footer">
                                        <div className="unit unit-spacing-sm d-flex flex-column flex-md-row align-items-center">
                                            <div className="unit-left">
                                                <div className="quote-carly-figure">
                                                    <img src={clientsay1} alt="" />
                                                </div>
                                            </div>
                                            <div className="unit-body">
                                                <div className="quote-carly-author">Emily jameson</div>
                                                <div className="quote-carly-status">Client</div>
                                            </div>
                                        </div>
                                </div>
                            </article>
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="">
                            <article className="quote-carly quote-carly-1">
                                <div class="quote-carly-text">
                                    <FaQuoteLeft className='quote-carly-icon'/>
                                    <div className="q">
                                    I like the vast choice of cat food that this pet shop provides. Being a regular client here for 3 years, I am 100% satisfied by Tarian.
                                    </div>
                                 
                                </div>
                                <div className="quote-carly-footer">
                                        <div className="unit unit-spacing-sm d-flex flex-column flex-md-row align-items-center">
                                            <div className="unit-left">
                                                <div className="quote-carly-figure">
                                                    <img src={clientsay2} alt="" />
                                                </div>
                                            </div>
                                            <div className="unit-body">
                                                <div className="quote-carly-author">Emily jameson</div>
                                                <div className="quote-carly-status">Client</div>
                                            </div>
                                        </div>
                                </div>
                            </article>
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="">
                            <article className="quote-carly quote-carly-1">
                                <div class="quote-carly-text">
                                    <FaQuoteLeft className='quote-carly-icon'/>
                                    <div className="q">
                                    I like the vast choice of cat food that this pet shop provides. Being a regular client here for 3 years, I am 100% satisfied by Tarian.
                                    </div>
                                 
                                </div>
                                <div className="quote-carly-footer">
                                        <div className="unit unit-spacing-sm d-flex flex-column flex-md-row align-items-center">
                                            <div className="unit-left">
                                                <div className="quote-carly-figure">
                                                    <img src={clientsay3} alt="" />
                                                </div>
                                            </div>
                                            <div className="unit-body">
                                                <div className="quote-carly-author">Emily jameson</div>
                                                <div className="quote-carly-status">Client</div>
                                            </div>
                                        </div>
                                </div>
                            </article>
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="">
                            <article className="quote-carly quote-carly-1">
                                <div class="quote-carly-text">
                                    <FaQuoteLeft className='quote-carly-icon'/>
                                    <div className="q">
                                    I like the vast choice of cat food that this pet shop provides. Being a regular client here for 3 years, I am 100% satisfied by Tarian.
                                    </div>
                                 
                                </div>
                                <div className="quote-carly-footer">
                                        <div className="unit unit-spacing-sm d-flex flex-column flex-md-row align-items-center">
                                            <div className="unit-left">
                                                <div className="quote-carly-figure">
                                                    <img src={clientsay4} alt="" />
                                                </div>
                                            </div>
                                            <div className="unit-body">
                                                <div className="quote-carly-author">Emily jameson</div>
                                                <div className="quote-carly-status">Client</div>
                                            </div>
                                        </div>
                                </div>
                            </article>
                        </div>
                        
                    </SwiperSlide>
                  
                   
        </Swiper>
    
    </>
  )
}
