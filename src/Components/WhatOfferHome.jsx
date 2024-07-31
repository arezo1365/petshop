import React from 'react'
import offer1 from "../assets/whatoffer/icon-01-50x50.png"
import offer2 from "../assets/whatoffer/icon-02-50x42.png"
import offer3 from "../assets/whatoffer/icon-03-48x50.png"
import offer4 from "../assets/whatoffer/icon-04-42x50.png"
import offer5 from "../assets/whatoffer/icon-05-42x50.png"
import offer6 from "../assets/whatoffer/icon-06-50x44.png"


export default function WhatOfferHome() {
  return (
    <div className="container padding-container-offer pb-lg-5" style={{maxWidth:"1200px"}}>
      <h2 className='whatoffer-home-h2'>What we offer</h2>
      <div className="row">
        {/* <div className='d-flex text-offer-sm'> */}
          <div className="col-md-4 col-sm-6 text-offer-sm">
            <article>
              <div className="unit d-flex flex-column flex-sm-row flex-md-column flex-xl-row">
                <div className="unit-left">
                  <div className='box-icon-classic-icon'>
                    <img src={offer1} alt="" className='p-2 rounded-5' />
                  </div>
                </div>
                <div className="unit-body">
                  <h4 className='box-icon-classic-title'>
                    <a href=""> Grooming</a>
                  </h4>
                  <p className='box-icon-classic-text'>Let your pets enjoy the first-class grooming services provided by our certified and experienced groomers.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-md-4 col-sm-6 text-offer-sm">
            <article>
            {/* className='box-icon-classic text-sm-left */}
              <div className="unit d-flex flex-column flex-sm-row flex-md-column flex-xl-row">
                <div className="unit-left">
                  <div className='box-icon-classic-icon'>
                    <img src={offer2} alt="" className='p-2 rounded-5' />
                  </div>
                </div>
                <div className="unit-body">
                  <h4 className='box-icon-classic-title'>
                    <a href=""> Pet hotel</a>
                  </h4>
                  <p className='box-icon-classic-text'>
                  At Tarian, we offer a safe & clean environment with playtime, exercises, healthy meals & more.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-md-4 col-sm-6 text-offer-sm">
            <article>
              <div className="unit d-flex flex-column flex-sm-row flex-md-column flex-xl-row">
                <div className="unit-left">
                  <div className='box-icon-classic-icon'>
                    <img src={offer3} alt="" className='p-2 rounded-5' />
                  </div>
                </div>
                <div className="unit-body">
                  <h4 className='box-icon-classic-title'>
                    <a href=""> Dog daycare</a>
                  </h4>
                  <p className='box-icon-classic-text'>
                  Our daytime guests enjoy playtime with other dogs in a safe and fun environment.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-md-4 col-sm-6 text-offer-sm">
            <article>
              <div className="unit d-flex flex-column flex-sm-row flex-md-column flex-xl-row">
                <div className="unit-left">
                  <div className='box-icon-classic-icon'>
                    <img src={offer4} alt="" className='p-2 rounded-5' />
                  </div>
                </div>
                <div className="unit-body">
                  <h4 className='box-icon-classic-title'>
                    <a href=""> Dog training</a>
                  </h4>
                  <p className='box-icon-classic-text'>
                  Our accredited pet trainers teach fun & eﬀective group & private classes through positive reinforcement.
                  </p>

                </div>
              </div>
            </article>
          </div>
          <div className="col-md-4 col-sm-6 text-offer-sm">
            <article>
              <div className="unit d-flex flex-column flex-sm-row flex-md-column flex-xl-row">
                <div className="unit-left">
                  <div className='box-icon-classic-icon'>
                    <img src={offer5} alt="" className='p-2 rounded-5' />
                  </div>
                </div>
                <div className="unit-body">
                  <h4 className='box-icon-classic-title'>
                    <a href="">Veterinary care</a>
                  </h4>
                  <p className='box-icon-classic-text'>
                  Save your pet the discomfort of advanced illness & help save you the stress & expense of treatment.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-md-4 col-sm-6 text-offer-sm">
            <article>
              <div className="unit d-flex flex-column flex-sm-row flex-md-column flex-xl-row">
                <div className="unit-left">
                  <div className='box-icon-classic-icon'>
                    <img src={offer6} alt="" className=' p-2 rounded-5' />
                  </div>
                </div>
                <div className="unit-body">
                  <h4 className='box-icon-classic-title'>
                    <a href="">Adoption</a>
                  </h4>
                  <p className='box-icon-classic-text'>
                  Whether you adopt online or at a Tarian store near you, you’re helping change the life of a pet in need.
                  </p>
                </div>
              </div>
            </article>
          </div>

        {/* </div> */}
        
       
        
      </div>
      
    </div>
  )
}
