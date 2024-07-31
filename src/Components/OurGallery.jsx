import React from 'react'

export default function OurGallery({picURL}) {
  return (
   <section className="d-flex p-0">
    <div className="row m-0">
        <div className="col mb-2 p-0">
            <img src={picURL} alt="" />
        </div>
     
    </div>
   </section>
  )
  }