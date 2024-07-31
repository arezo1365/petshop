import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import  background from "../assets/homesection1/home-bg-1.jpg"
import { MdOutlineHorizontalRule } from "react-icons/md";
import ProductsHome from '../Components/ProductsHome';
import ClientsSayHome from '../Components/ClientsSayHome';
import BoxCtaHome from '../Components/BoxCtaHome';
import AboutUsHome from '../Components/AboutUsHome';
import OurTeamHome from '../Components/OurTeamHome';
import  aboutushome from '../assets/about/aboutushome/about-4-570x511.jpg'
import HurryUpHome from '../Components/HurryUpHome';
import FeaturedHome from '../Components/FeaturedHome';
import PerpleRowHome from '../Components/PerpleRowHome';
import LatestNewsHome from '../Components/LatestNewsHome';
import WhatOfferHome from '../Components/WhatOfferHome';




export default function Home() {
  const styleSection1BgImg={
    backgroundImage:  `url(${background})`,
    width:'auto',
    height:"543px",
    display:"block"

  }
  const MlineHRulecomp={
   fontSize:"60px",
   fontWeight:"20px",
  
   
  }
  return (
    <>
    <section id='section1' className=' section1 bg-position1 bg-ovrlay margin-section1-home'  style={styleSection1BgImg}>
      <div className="container sizeFit">
        <div className="row  d-flex justify-content-start m-0">
          <div className=" col-lg-12 col-xl-7 col-md-8 text-start1" >
            <h1 className='lt-spacing-normal '>Tarian</h1>
            <h3 className='lt-spacing-75'><MdOutlineHorizontalRule style={MlineHRulecomp}/>MAKE YOUR PETS HAPPY</h3>
            <h4 className='lt-spacing-100'>Our Pet Shop values quality, comfort, and individuality of our products and services.</h4>
            <div className='mt-5'><a href="" className='button button-lg button-primery'>READ MORE</a></div>
          </div>
        </div>
      </div>
    </section>
    {/* FeaturedHome */}
    <section className='section8 section-xl section-last bg-default'>
      <div className="container" style={{maxWidth:'1200px'}}>
      <h2 className='featured-home-h2'>Featured products</h2>
        <div className="row ">
          <div className="col-12 featured-home-col d-flex justify-content-center align-items-center">
            <FeaturedHome/>
          </div>
        </div>
      </div>
     
    </section>
    {/* What we offer */}
    <section className='section11 bg-gray-1'>
      <WhatOfferHome/>
    </section>
    {/* hurryuphome */}
    <section className='section7 '>
    <HurryUpHome/>
    </section>

    {/* //productsHome */}
    <section id='section2'  >
      <div className=" container">
        <h2 className='titrRow'>Products</h2>
        <div className="row  h-100">
          <div className="col d-flex">
             <ProductsHome />
          </div>
        </div>
      </div>
    </section>
     {/* aboutushome */}
     <section  className="section5 position-relative">
      <div className="container position-relative" style={{marginTop: '150px'}}>
      <h2 className='Titr-aboutus-home'>About us</h2>
        <div className="row justify-content-center align-items-center">
        <div className="col-sm-8 col-md-7 col-lg-6 bird-aboutus-home">
          <img src={aboutushome} alt="" />
            
          </div>
          <div className="col-lg-6 col-md-10">
            <AboutUsHome/>
            
          </div>
        </div>
      </div>
    </section>
    {/* ourteam */}
    <section className='section6 section-xxl bg-gray-1'>
      <div className="container "style={{marginTop: '150px'}} >
      <h2 className='Titr-ourteam-home'>Our team</h2>
        <div className="row justify-content-between">
          <div className="col text-center">
            <OurTeamHome/>
            
          </div>
        </div>
      </div>

    </section>
    {/* BoxCtaHome */}
    <section className='section4 '>
        <BoxCtaHome/>
    </section>
    {/* ClientsSayHome */}
    <section className='section3 bg-default'>
        <div className="container">
            <h2 className='fadeScale'>What Our Clients Say</h2>
            <ClientsSayHome />
        </div>
    </section>
    {/* Latest News */}
    <section className='section10 my-5 py-5'>
      <LatestNewsHome/>
    </section>
    
    {/* Purplerowhome */}
    <section className='section9' style={{backgroundColor:"#959af1"}}>
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <PerpleRowHome/>
          </div>
        </div>
      </div>
    </section>
    
    
    </>
  )
}
