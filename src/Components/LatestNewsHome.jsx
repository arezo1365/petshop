import React, { useState } from 'react'
import latest1 from "../assets/latestnewshome/post-1-570x461.jpg"
import latest2 from "../assets/latestnewshome/post-2-270x215.jpg"
import latest3 from "../assets/latestnewshome/post-3-270x215.jpg"
import ProjectLatest from './ProjectLatest'
import Project2 from './Project2'



export default function LatestNewsHome() {
   
  return (
    <div className="container " >
        <h2 className='latestnews-home-h2'>Latest News</h2>
        <div className="row ta">
            <div className="col-md-6 p-sm-0">
                <article className='post post-nikki post-nikki-2'>
                    <div className="post-nikki-figure1 d-flex justify-content-center" >
                        <img src={latest1}  alt=""/>
                    </div>
                    <div className="post-nikki-body">
                        <div className='p-lg-5 post-nikki-title-p-sm p-md-3 '>
                            <div className="post-nikki-time">
                                <time dateTime="2024-06-28">June 28, 2024</time>
                            </div>
                            <div className="post-nikki-title">
                                <a href="#">Deciphering your cat’s language</a>
                            </div>
                        </div>
                    </div>

                </article>
            </div>
            <div className="col-md-6 ">
               <div className="row">
                <div className='responsive-sm'>
                <div className="col-6 col-md-12 bottom-col">
                        <article className="post post-nikki">
                            <div className="unit unit-spacing-lg d-flex align-items-center ">
                                <div className="unit-left ">
                                    <a href="" className='post-nikki-figure'>
                                        <img src={latest2} alt="" />
                                    </a>
                                </div>
                                <div className="unit-body ">
                                    <div className="post-nikki-time ">
                                    <time dateTime="2024-06-28">June 28, 2024</time>
                                    </div>
                                    <div className="post-nikki-title ">
                                        <a href="">Easy tricks to teach your dog</a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-6 col-md-12">
                        <article className="post post-nikki">
                                <div className="unit unit-spacing-lg d-flex align-items-center">
                                    <div className="unit-left  ">
                                        <a href="" className='post-nikki-figure '>
                                            <img src={latest3} alt="" />
                                        </a>
                                    </div>
                                    <div className="unit-body ">
                                        <div className="post-nikki-time">
                                        <time dateTime="2024-06-28">June 28, 2024</time>
                                        </div>
                                        <div className="post-nikki-title">
                                            <a href="">8 tips for taking the perfect photo of your pet</a>
                                        </div>
                                    </div>
                                </div>
                        </article>
                    </div>

                </div>
                   
               </div>
            </div>
        </div>
    </div>
    
   
  
  )
}
