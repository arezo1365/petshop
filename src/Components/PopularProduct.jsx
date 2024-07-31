import React from 'react'
import popular1 from "../assets/popularproduct/product-mini-1-106x104.jpg"
import popular2 from "../assets/popularproduct/product-mini-2-106x104.jpg"
import popular3 from "../assets/popularproduct/product-mini-3-106x104.jpg"
import { MdOutlinePets } from "react-icons/md"



export default function PopularProduct() {
  return (
    <>
    

    
     <article>
      <div className="d-flex justify-content-center align-items-center justify-content-sm-start  justify-content-md-start ">
        <div className="popular-titr-left"><MdOutlinePets size={'2rem'} color='#959af1' /></div>
        <div className="popular-titr-right ">
        <h3 style={{fontSize:"1rem",padding:"1rem",verticalAlign:"middle"}} >POPULARS</h3>
        </div>
      </div>
    <div className='d-flex justify-content-center justify-content-sm-start  justify-content-md-start align-items-center popular-mb-lg'>
        <div>
           <img src={popular1} alt="" />
           
         </div>
         <div>
           <img src={popular3} alt="" />
           </div>
           <div>
           <img src={popular2} alt="" />
           
         </div>
    </div>
     


     </article>
    </>
   
  )
}
