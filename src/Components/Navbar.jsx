import React from 'react'
import logo from "/logo.png"
import { GoSearch } from "react-icons/go"
import { SlBasketLoaded ,SlLocationPin } from "react-icons/sl"
import { MdOutlineEmail  } from "react-icons/md"
import { Link, NavLink } from 'react-router-dom'



export default function Navbar({ cartItemsCount }) {
  const MOEmail={
    position: "relative",
    display: "inline-block",
    fontWeight: "400",
    fontSize:"22",
    margin:"10"
            }
  const SLPin={
   fontSize:"50",
   paddingRight:"10"
            }
  return (
    <>

<nav className="navbar navbar-expand-lg bg-body-tertiary" >
  <div className="container-fluid color-container-navbar fixed-top d-block">
  
    <div className='navbar-top-route'>
      <div className="row row-cols-3  navbar-top">
            <div className="col navbar-aside-top d-flex " >
              <div className='navbar-aside-top-left'><SlLocationPin style={SLPin}/></div>
              <div className='navbar-aside-top-right'>
                <a href="" className='text-decoration-none'>
                523 Sylvan Ave
                <br />
                Mountain View, CA 94041
                </a>
              </div>
              
            </div>
            <div className="col brand d-flex " > 
              <a className="navbar-brand text-center" href="#">
                <img src={logo} alt="" />
               
              </a>     
          </div>
            <div className="col navbar-button " >
              <a href="" className='button button-primary-outline button-sm d-flex '><MdOutlineEmail style={MOEmail }/>Get in touch</a>
            </div>
            
      </div>
    </div>
    <div className='navbar-main-route '>
      <div className="row row-cols-2 navbar-main">
            <div className="col navbar-aside-left-main ">
           <div className='d-flex navbar-section-sm '>
              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             
              
              <span className="navbar-toggler-icon "></span>
            
              </button>
              <div className='navbar-brand-sm ms-2 hstack '>
                  <a className="navbar-brand text-center " href="#">
                    <img src={logo} alt="" />
                  </a>  
              </div>
           </div>
          
          
          <div className="collapse navbar-collapse style-canvas-nav   offcanvas offcanvas-start" id="navbarSupportedContent">
           
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item fw-bold">
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                <li className='nav-item '>
                    <NavLink className='nav-link' to={"/"}>
                      Home
                    </NavLink>
                  </li>
              </li>
              
              <li className="nav-item fw-bold">
              {/* <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" to={"/pages"}> */}
                  {/* PAGES */}
                {/* </a> */}
                <NavLink className="nav-link " to={"/about us"}>
                  About us
                </NavLink>
               
              </li>
              
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  BLOG
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
                
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  ELEMENTS
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
              <li className="nav-item fw-bold">
                <NavLink className="nav-link"  to={"/shoplist"}>
                  SHOP
                </NavLink>
              
              </li>
              <li className="nav-item fw-bold">
                <NavLink className="nav-link" href="#" to={"/gridgallery"}>GALLERY</NavLink>
              </li>
              
             
           
             

            </ul>
         
            

          </div>
            </div>
            <div className="col navbar-aside-right-main d-flex justify-content-end align-items-end ">
              <div className='navbar-search'>
                  <GoSearch className='color-search-navbar'/>
              </div>
              
            <div >
                  <div className='navbar-basket position-relative'>
                  <Link to={"/cartpage"}><SlBasketLoaded className='color-basket-navbar'/></Link>
                    <span className='position-absolute  translate-middle badge rounded-pill bg-danger'>
                      {cartItemsCount}
                      
                    </span>
                  </div>
            </div>
            
            </div>
      </div>
    </div>
  </div>
</nav>

</>

  )




}
