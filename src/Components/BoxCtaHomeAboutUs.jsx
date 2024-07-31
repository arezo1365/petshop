import React from 'react'
import boxcta from "../assets/boxcta/bg-cta-1.jpg"


export default function BoxCtaHomeAboutUs() {
    const styleBoxCta={
        backgroundImage:  `url(${boxcta})`,
        display:"block",
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      
      }
  return (
    <section className='section4 section-xxl section-inset-1 bg-image' style={styleBoxCta}>
      <div className='container box-cta'>
        <h2 className='fadeInDown mt-3'>Our History</h2>
      </div>
    </section>
  )
}
