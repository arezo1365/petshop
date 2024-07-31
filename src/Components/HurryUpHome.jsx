import React from 'react'
import hurryup from "../assets/hurryup/bg-cta.jpg"

export default function HurryUpHome() {
    const stylHurryUpHome={
        backgroundImage:  `url(${hurryup})`,
        display:"block",
        // backgroundPosition: 'center center',
        backgroundSize: 'cover',
      
      }
  return (
    <section className='section-xxl bg-primary1 context-dark bg-position-2 text-start' style={stylHurryUpHome}>
        <div className="container">
        <div className="row">
          <div className="col-md-7 hurryuphome-col">
            <h2 className='titr1-hurryup-home'>Hurry up!</h2>
            <h4 className='titr2-hurryup-home'>Save 50% on all items your first order</h4>
            <p className='par-hurryup-home'>Shop today to save big on your first order at Tarian Store and get everything that your dog needs to stay healthy and happy.</p>
            <a href="" className='button button-primary button-zakaria'>Shop now</a>
          </div>
        </div>
      </div>
       
    </section>
  )
  
}
