import React from 'react'
import breadcrumbs from "../assets/breadcrumbs-bg/breadcrumbs-bg.jpg"


export default function GridGallery() {
    const styleGridGallery={
        backgroundImage:  `url(${breadcrumbs})`,
        display:"block",
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      
      }
  return (
    <section className='breadcrumbs-custom'>
      <div className='parallax-container'>
        <div className='material-parallax parallax'>
          <img src={breadcrumbs}  style={styleGridGallery}/>
        </div>
        <div className='breadcrumbs-custom-body parallax-content context-dark'>
          <div className="container">
            <h2 className='breadcrumbs-custom-title'>Grid Gallery</h2>
            <h5 className="breadcrumbs-custom-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do   
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              
            </h5>
          </div>
        </div>
      </div>
    </section>
  )
}
