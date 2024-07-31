import React from 'react'
import boxcta from "../assets/boxcta/bg-cta-1.jpg"


export default function BoxCtaHome() {
    const styleBoxCta={
        backgroundImage:  `url(${boxcta})`,
        display:"block",
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      
      }
  return (
    <section className='section4 section-xxl section-inset-1 bg-image' style={styleBoxCta}>
      <div className='container box-cta'>
        <h2 className='fadeInDown'>Dog & cat treats</h2>
        <h4 className='fadeScale2'>Pamper your pets with our range of quality dog & cat treats</h4>
        <div className='mt-5'>
        <a href="" className='button button-lg button-primery btn-one'>SHOP NOW</a>
        </div>
       
      </div>
    </section>
  )
}
