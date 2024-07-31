import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import SocialIconLink from '../Components/SocialIconLink';
import { FaFacebookF } from 'react-icons/fa';
import { ImInstagram, ImTwitter } from 'react-icons/im';
import { GrGooglePlus } from 'react-icons/gr';
import breadcrumbs from "../assets/breadcrumbs-bg/breadcrumbs-bg.jpg"
import ProductsHome from '../Components/ProductsHome';


export default function SingleProduct({setCartCount}) {
  const styleSingleProduct={
    backgroundImage:  `url(${breadcrumbs})`,
    display:"block",
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  
  }
    const {shopId}=useParams()
    const [singleproduct,setSingleproduct]=useState({})
    const addToCart=(id)=>{
      if (!localStorage.getItem('cart')){
        localStorage.setItem("cart",JSON.stringify([]))
      }
     const cart=JSON.parse(localStorage.getItem('cart'))
      if (cart.filter((item)=>item.id===id).length>0){
        const newcart=cart.map((item)=>(item.id===id ? {...item , count:item.count+1 } : item))
        localStorage.setItem("cart",JSON.stringify(newcart))
      }
      else
      {
        localStorage.setItem("cart",JSON.stringify([...cart,{id:id,count:1}]))
      }
      setCartCount(JSON.parse(localStorage.getItem("cart")).length);
    }
    useEffect(()=>{
        axios
        .get(`https://fakestoreapi.com/products/${shopId}`)
        .then((res)=>{
        setSingleproduct(res.data)
        })
        .catch((error) => {
        console.log("خطا در اتصال !");
        });
      },[])
  return (
    <>
    <section className='breadcrumbs-custom mb-5'>
    <div className='parallax-container'>
      <div className='material-parallax parallax'>
        <img src={breadcrumbs}  style={styleSingleProduct}/>
      </div>
      <div className='breadcrumbs-custom-body parallax-content context-dark'>
        <div className="container">
          <h2 className='breadcrumbs-custom-title'>Single Product</h2>
         
         
        </div>
      </div>
    </div>
  </section>
    <div className="container p-5">
      <div className="row">
        <div className="col-lg-6 ">
          <img src={singleproduct.image} className="card-img-top object-fit-cover w-100 va2" alt="" />
        </div>
        <div className="col-lg-6">
        <div className='card-body d-flex flex-column singleproduct-card-body' >
                <h3 className='card-title '>{singleproduct.title}</h3>
               
                <h5 className='card-text'>Price: {singleproduct.price}</h5>
              
              
                
                <p className='card-text'>{singleproduct.description}</p>
                <div className='mt-5 sigleproduct-mb-li'>
                  <li style={{listStyle:"none", lineHeight:'2rem'}}>
                    <span>Categories:</span>
                    <span>Gift</span>
                  </li>
                  <li style={{listStyle:"none",lineHeight:'2rem'}}>
                    <span>Weight:</span>
                    <span>0,44 lbs</span>
                  </li>
                  <li style={{listStyle:"none",lineHeight:'2rem'}}>
                    <span>Size:</span>
                    <span>60 x 60 x 90 cm</span>
                  </li>

                </div>
                
                
               
              </div>
              <button className='btn btn-danger button-primery3' onClick={() => {addToCart(singleproduct.id);}}>
                ADD TO CART
        </button>
        </div>
       <div>
       
       <ul className='list-unstyled d-flex justify-content-center align-items-center' id="ourteam-socials">
       share:
                <li> 
                <SocialIconLink  url={"https://www.facebook.com"}>
                  <FaFacebookF />
                </SocialIconLink>
                 
                </li>
                <li>
                <SocialIconLink  url={"https://www.facebook.com"}>
                  <ImTwitter />
                  
                </SocialIconLink>
                </li>
                <li>
                <SocialIconLink  url={"https://www.facebook.com"}>
                  <ImInstagram/>
                </SocialIconLink>
                
                </li>
                <li>
                <SocialIconLink  url={"https://www.facebook.com"}>
                  <GrGooglePlus/>
                </SocialIconLink>
               
                </li>
              
        </ul>
       </div>
       <div>
       <div className="tabs-custom tabs-horizontal tabs-line mt-5 mb-5" id='tabs-1'>
            <div className='nav-tabs-wrap'>
              <ul className="nav nav-tabs">
                <li className='nav-item'>
                  <a class="nav-link active" href="#tabs-1-1" data-bs-toggle="tab">Reviews</a>
                </li>
                <li className='nav-item'>
                  <a class="nav-link" href="#tabs-1-2" data-bs-toggle="tab">Additional information</a>
                </li>
                <li className='nav-item'>
                  <a class="nav-link" href="#tabs-1-3" data-bs-toggle="tab">Delivery and payment</a>
                </li>
               
              </ul>
              <hr />
            </div>
            <div className="tab-content">
             
                    <div className="tab-pane fade show active " id="tabs-1-1">
                    <p>Eget sit amet tellus cras adipiscing enim. Tempus imperdiet nulla malesuada pellentesque elit. Eros in cursus turpis massa tincidunt.</p>
                    <p>Lacus suspendisse faucibus interdum posuere lorem. Elit duis tristique sollicitudin nibh. Dui ut ornare lectus sit amet. Phasellus egestas tellus rutrum tellus elementum.
                    </p>
                  </div>
                  <div className="tab-pane fade" id="tabs-1-2">
                    <p>Vae. Dexter fiscina aliquando vitares animalis est. Nunquam convertam bulla. Cum pars prarere, omnes seculaes. A cras semper auctor neque vitae tempus quam pellentesque.</p>
                    <p>Navis dexter historia est. Luba, homo, et indictio. Emeritis eposs ducunt ad animalis. Cum solem assimilant, omnes byssuses vitare clemens, secundus nixuses.</p>
                  </div>
                  <div className="tab-pane fade" id="tabs-1-3">
                    <p>Eu augue ut lectus arcu bibendum at varius. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Orci eu lobortis elementum nibh tellus molestie nunc non.</p>
                    <p>Mi proin sed libero enim sed faucibus turpis in eu. Sit amet purus gravida quis blandit turpis cursus in. Viverra aliquet eget sit amet tellus.</p>
                  </div>

            </div>
        </div>
        <div><ProductsHome/></div>
        
       </div>
      </div>
    </div>
    </>
  )
}
