import React, { useState } from 'react'
import products1 from "../assets/products/product-01-200x200.png"
import products2 from "../assets/products/product-02-200x200.png"
import products3 from "../assets/products/product-03-200x200.png"
import products4 from "../assets/products/product-04-200x200.png"
import {SlBasketLoaded } from "react-icons/sl"
import {BsSearch } from "react-icons/bs"
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css';
import {  Pagination, A11y } from 'swiper/modules';
import 'swiper/css/pagination';


export default function ProductsHome() {
    
  
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
                            slidesPerView: 1,
                        },
                        400:{
                            slidesPerView:1,
                        },
                        639: {
                            slidesPerView: 3,
                        },
                        865:{
                            slidesPerView:3,
                        },
                        1200:{
                            slidesPerView:4,
                        },
                       
                        }}
                    
                
                    
               
                 
                >
                <SwiperSlide >
                    <section>
                        <article className='product'>
                            <div className="product-body">
                            <div className="product-figure">
                                <img src={products1} alt=""/>
                                
                            </div>
                            <h5 className='product-title'><a href="" className='hovermouse'>Deep Dish Cuddler</a></h5>
                            <div className="product-price-wrap">
                                <div className="product-price product-price-old">
                                    $30.00
                                </div>
                                <div className="product-price">
                                    $23.00
                                </div>
                                
                            </div>
                            </div>
                            <span class="product-badge product-badge-sale">Sale</span>
                            <div className="product-button-wrap">
                                <div className="product-button">
                                    <a href=""className="button button-secondary button-zakaria fl-bigmug-line-shopping202">
                                        <SlBasketLoaded  size={20}/>
                                        
                                    </a>
                                </div>
                                <div className="product-button">
                                    <a href=""className="button button-secondary button-zakaria fl-bigmug-line-search74">
                                        <BsSearch  size={20}/>
                                        
                                    </a>
                                </div>
                                
                            </div>
                            
                        </article>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
        <section>
            <article className='product'>
                <div className="product-body">
                <div className="product-figure">
                    <img src={products1} alt=""/>
                    
                </div>
                <h5 className='product-title'><a href="" className='hovermouse'>Deep Dish Cuddler</a></h5>
                <div className="product-price-wrap">
                    <div className="product-price product-price-old">
                        $30.00
                    </div>
                    <div className="product-price">
                        $23.00
                    </div>
                    
                </div>
                </div>
                <span class="product-badge product-badge-sale">Sale</span>
                <div className="product-button-wrap">
                    <div className="product-button">
                        <a href=""className="button button-secondary button-zakaria fl-bigmug-line-shopping202">
                            <SlBasketLoaded  size={20}/>
                            
                        </a>
                    </div>
                    <div className="product-button">
                        <a href=""className="button button-secondary button-zakaria fl-bigmug-line-search74">
                            <BsSearch  size={20}/>
                            
                        </a>
                    </div>
                    
                </div>
                
            </article>
        </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section>
                        <article className='product'>
                            <div className="product-body">
                            <div className="product-figure">
                                <img src={products2} alt=""/>
                                
                            </div>
                            <h5 className='product-title'><a href="" className='hovermouse'>Zoo Fun Dog Collars</a></h5>
                            <div className="product-price-wrap">
                                
                                <div className="product-price">
                                    $11.00
                                </div>
                                
                            </div>
                            </div>
                            {/* <span class="product-badge product-badge-sale">Sale</span> */}
                            <div className="product-button-wrap">
                                <div className="product-button">
                                    <a href=""className="button button-secondary button-zakaria fl-bigmug-line-shopping202">
                                        <SlBasketLoaded  size={20}/>
                                        
                                    </a>
                                </div>
                                <div className="product-button">
                                    <a href=""className="button button-secondary button-zakaria fl-bigmug-line-search74">
                                        <BsSearch  size={20}/>
                                        
                                    </a>
                                </div>
                                
                            </div>
                            
                        </article>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section>
                        <article className='product'>
                            <div className="product-body">
                            <div className="product-figure">
                                <img src={products3} alt=""/>
                                
                            </div>
                            <h5 className='product-title'><a href="" className='hovermouse'>Glendan Dog Brush</a></h5>
                            <div className="product-price-wrap">
                                
                                <div className="product-price">
                                    $17.00
                                </div>
                                
                            </div>
                            </div>
                            <span class="product-badge product-badge-new">NEW</span>
                            <div className="product-button-wrap">
                                <div className="product-button">
                                    <a href=""className="button button-secondary button-zakaria fl-bigmug-line-shopping202">
                                        <SlBasketLoaded  size={20}/>
                                        
                                    </a>
                                </div>
                                <div className="product-button">
                                    <a href=""className="button button-secondary button-zakaria fl-bigmug-line-search74">
                                        <BsSearch  size={20}/>
                                        
                                    </a>
                                </div>
                                
                            </div>
                            
                        </article>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section>
                        <article className='product'>
                            <div className="product-body">
                            <div className="product-figure">
                                <img src={products4} alt=""/>
                                
                            </div>
                            <h5 className='product-title'><a href="" className='hovermouse'>Deep Dish Cuddler</a></h5>
                            <div className="product-price-wrap">
                                
                                <div className="product-price">
                                    $12.00
                                </div>
                                
                            </div>
                            </div>
                            {/* <span class="product-badge product-badge-sale">Sale</span> */}
                            <div className="product-button-wrap">
                                <div className="product-button">
                                    <a href=""className="button button-secondary button-zakaria fl-bigmug-line-shopping202">
                                        <SlBasketLoaded  size={20}/>
                                        
                                    </a>
                                </div>
                                <div className="product-button">
                                    <a href=""className="button button-secondary button-zakaria fl-bigmug-line-search74">
                                        <BsSearch  size={20}/>
                                        
                                    </a>
                                </div>
                                
                            </div>
                            
                        </article>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
        <section>
            <article className='product'>
                <div className="product-body">
                <div className="product-figure">
                    <img src={products1} alt=""/>
                    
                </div>
                <h5 className='product-title'><a href="" className='hovermouse'>Deep Dish Cuddler</a></h5>
                <div className="product-price-wrap">
                    <div className="product-price product-price-old">
                        $30.00
                    </div>
                    <div className="product-price">
                        $23.00
                    </div>
                    
                </div>
                </div>
                <span class="product-badge product-badge-sale">Sale</span>
                <div className="product-button-wrap">
                    <div className="product-button">
                        <a href=""className="button button-secondary button-zakaria fl-bigmug-line-shopping202">
                            <SlBasketLoaded  size={20}/>
                            
                        </a>
                    </div>
                    <div className="product-button">
                        <a href=""className="button button-secondary button-zakaria fl-bigmug-line-search74">
                            <BsSearch  size={20}/>
                            
                        </a>
                    </div>
                    
                </div>
                
            </article>
        </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section>
                        <article className='product'>
                            <div className="product-body">
                            <div className="product-figure">
                                <img src={products2} alt=""/>
                                
                            </div>
                            <h5 className='product-title'><a href="" className='hovermouse'>Zoo Fun Dog Collars</a></h5>
                            <div className="product-price-wrap">
                                
                                <div className="product-price">
                                    $11.00
                                </div>
                                
                            </div>
                            </div>
                            {/* <span class="product-badge product-badge-sale">Sale</span> */}
                            <div className="product-button-wrap">
                                <div className="product-button">
                                    <a href=""className="button button-secondary button-zakaria fl-bigmug-line-shopping202">
                                        <SlBasketLoaded  size={20}/>
                                        
                                    </a>
                                </div>
                                <div className="product-button">
                                    <a href=""className="button button-secondary button-zakaria fl-bigmug-line-search74">
                                        <BsSearch  size={20}/>
                                        
                                    </a>
                                </div>
                                
                            </div>
                            
                        </article>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section>
                        <article className='product'>
                            <div className="product-body">
                            <div className="product-figure">
                                <img src={products3} alt=""/>
                                
                            </div>
                            <h5 className='product-title'><a href="" className='hovermouse'>Glendan Dog Brush</a></h5>
                            <div className="product-price-wrap">
                                
                                <div className="product-price">
                                    $17.00
                                </div>
                                
                            </div>
                            </div>
                            <span class="product-badge product-badge-new">NEW</span>
                            <div className="product-button-wrap">
                                <div className="product-button">
                                    <a href=""className="button button-secondary button-zakaria fl-bigmug-line-shopping202">
                                        <SlBasketLoaded  size={20}/>
                                        
                                    </a>
                                </div>
                                <div className="product-button">
                                    <a href=""className="button button-secondary button-zakaria fl-bigmug-line-search74">
                                        <BsSearch  size={20}/>
                                        
                                    </a>
                                </div>
                                
                            </div>
                            
                        </article>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section>
                        <article className='product'>
                            <div className="product-body">
                            <div className="product-figure">
                                <img src={products4} alt=""/>
                                
                            </div>
                            <h5 className='product-title'><a href="" className='hovermouse'>Deep Dish Cuddler</a></h5>
                            <div className="product-price-wrap">
                                
                                <div className="product-price">
                                    $12.00
                                </div>
                                
                            </div>
                            </div>
                            {/* <span class="product-badge product-badge-sale">Sale</span> */}
                            <div className="product-button-wrap">
                                <div className="product-button">
                                    <a href=""className="button button-secondary button-zakaria fl-bigmug-line-shopping202">
                                        <SlBasketLoaded  size={20}/>
                                        
                                    </a>
                                </div>
                                <div className="product-button">
                                    <a href=""className="button button-secondary button-zakaria fl-bigmug-line-search74">
                                        <BsSearch  size={20}/>
                                        
                                    </a>
                                </div>
                                
                            </div>
                            
                        </article>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section>
                        <article className='product'>
                            <div className="product-body">
                            <div className="product-figure">
                                <img src={products4} alt=""/>
                                
                            </div>
                            <h5 className='product-title'><a href="" className='hovermouse'>Deep Dish Cuddler</a></h5>
                            <div className="product-price-wrap">
                                
                                <div className="product-price">
                                    $12.00
                                </div>
                                
                            </div>
                            </div>
                            {/* <span class="product-badge product-badge-sale">Sale</span> */}
                            <div className="product-button-wrap">
                                <div className="product-button">
                                    <a href=""className="button button-secondary button-zakaria fl-bigmug-line-shopping202">
                                        <SlBasketLoaded  size={20}/>
                                        
                                    </a>
                                </div>
                                <div className="product-button">
                                    <a href=""className="button button-secondary button-zakaria fl-bigmug-line-search74">
                                        <BsSearch  size={20}/>
                                        
                                    </a>
                                </div>
                                
                            </div>
                            
                        </article>
                    </section>
                </SwiperSlide>
                    
                    
        </Swiper>
    
    </>
    
    
    )
    
    
 
}
