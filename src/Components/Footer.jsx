import React from 'react'
import { SlSocialTwitter } from 'react-icons/sl'
import { FaFacebookF,FaMapMarkerAlt,FaPhoneAlt} from 'react-icons/fa'
import { ImInstagram,ImSkype  } from "react-icons/im"
import { GrGooglePlus } from "react-icons/gr"
import { MdOutlineMailOutline,MdOutlineHorizontalRule } from "react-icons/md"
import SocialIconLink from './SocialIconLink'
import footer1 from "../assets/footer/grid-gallery-1-178x178.jpg"
import footer2 from "../assets/footer/grid-gallery-2-178x178.jpg"
import footer3 from "../assets/footer/grid-gallery-3-178x178.jpg"
import footer4 from "../assets/footer/grid-gallery-4-178x178.jpg"
import footer5 from "../assets/footer/grid-gallery-5-178x178.jpg"
import footer6 from "../assets/footer/grid-gallery-6-178x178.jpg"




export default function Footer({download_url,url}) {
  
  return (
   <footer>
    <section>
      <div className="container-fluid bg-color-footer py-5">
        <div className="row row-cols-1 row-cols-lg-3 py-5">
          <div className="col col-md-10 col-lg-3 ">
            <h5 className='title-footer ps-lg-3'>OUR GALLERY</h5>
            <div className='d-flex row m-0 p-3'>
              <div className="col-4 col-sm-2 col-lg-4 p-0  m-0">
                {/* <a href="" className='thumbnail-minimal'> */}
                  <img src={footer1} alt="" style={{width:"70px",height:'70px'}}/>
                {/* </a> */}
              </div>
              <div className="col-4 col-sm-2 col-lg-4 p-0">
                {/* <a href="" className='thumbnail-minimal'> */}
                  <img src={footer2} alt="" style={{width:"70px",height:'70px'}} />
                {/* </a> */}
              </div>
              <div className="col-4 col-sm-2 col-lg-4 p-0 pb-3">
                {/* <a href="" className='thumbnail-minimal'> */}
                  <img src={footer3} alt="" style={{width:"70px",height:'70px'}} />
                {/* </a> */}
              </div>
              <div className="col-4 col-sm-2 col-lg-4 p-0">
                {/* <a href="" className='thumbnail-minimal'> */}
                  <img src={footer4} alt="" style={{width:"70px",height:'70px'}}/>
                {/* </a> */}
              </div>
              <div className="col-4 col-sm-2 col-lg-4 p-0">
                {/* <a href="" className='thumbnail-minimal'> */}
                  <img src={footer5} alt="" style={{width:"70px",height:'70px'}}/>
                {/* </a> */}
              </div>
              <div className="col-4 col-sm-2 col-lg-4 p-0">
                {/* <a href="" className='thumbnail-minimal'> */}
                  <img src={footer6} alt="" style={{width:"70px",height:'70px'}} />
                {/* </a> */}
              </div>
            </div>
          </div>
          <div className="col col-sm-6 col-md-7 col-lg-5">
          <h5 className='title-footer'>Quick Links</h5>
            <ul className='footer-list footer-icon-links'>
              <li >
                <a className='align-items-center' href='#'>
                   
                <MdOutlineHorizontalRule className='footer-icon-compnt' size={20} />
                <span>About Us</span>
                </a>
              </li>
              <li>
                <a className='align-items-center' href='#'>
                   
                   <MdOutlineHorizontalRule className='footer-icon-compnt' size={20} />
                   <span >Our Services</span>
                </a>
              </li>
              <li>
                <a className='align-items-center' href='#'>
                   
                   <MdOutlineHorizontalRule className='footer-icon-compnt' size={20} />
                   <span >Shop</span>
                </a>
              </li>
              <li>
                <a className='align-items-center' href='#'>
                   
                   <MdOutlineHorizontalRule className='footer-icon-compnt' size={20} />
                   <span >Testimonials</span>
                </a>
              </li>
              <li>
                <a className='align-items-center' href='#'>
                   
                   <MdOutlineHorizontalRule className='footer-icon-compnt' size={20} />
                   <span >FAQ</span>
                </a>
              </li>
              <li>
                <a className='align-items-center' href='#'>
                   
                   <MdOutlineHorizontalRule className='footer-icon-compnt' size={20} />
                   <span >Contact Us</span>
                </a>
              </li>
              <li>
                <a className='align-items-center' href='#'>
                   
                   <MdOutlineHorizontalRule className='footer-icon-compnt' size={20} />
                   <span >Accessories</span>
                </a>
              </li>
              <li>
                <a className='align-items-center' href='#'>
                   
                   <MdOutlineHorizontalRule className='footer-icon-compnt' size={20} />
                   <span >Care</span>
                </a>
              </li>
              <li>
                <a className='align-items-center' href='#'>
                   
                   <MdOutlineHorizontalRule className='footer-icon-compnt' size={20} />
                   <span >Clothing</span>
                </a>
              </li>
              <li>
                <a className='align-items-center' href='#'>
                   
                   <MdOutlineHorizontalRule className='footer-icon-compnt' size={20} />
                   <span >Decor</span>
                </a>
              </li>
              <li>
                <a className='align-items-center' href='#'>
                   
                   <MdOutlineHorizontalRule className='footer-icon-compnt' size={20} />
                   <span >Food</span>
                </a>
              </li>
              <li>
                <a className='align-items-center' href='#'>
                   
                   <MdOutlineHorizontalRule className='footer-icon-compnt' size={20} />
                   <span >Grooming Supplies</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col col-sm-6 col-md-5 col-lg-4 col-xl-3">
            <h5 className='title-footer'>GET IN TOUCH</h5>
            <ul className='list-unstyled list-unstyled-sm'>
                <li>
                  <div className="unit d-flex">
                    <div className="unit-left icon-footer"><FaMapMarkerAlt /></div>
                    <div className="unit-body font-footer">
                      <a href="" >
                      523 Sylvan Ave, 5th Floor
                      <br />
                      Mountain View, CA 94041 USA
                      </a>
                    </div>

                  </div>
                </li>
                <li>
                  <div className="unit d-flex">
                    <div className="unit-left icon-footer"><FaPhoneAlt /></div>
                    <div className="unit-body font-footer">
                      <a href="">
                      (+844) 123 456 78
                      </a>
                    </div>

                  </div>
                </li>
                <li>
                  <div className="unit d-flex">
                    <div className="unit-left icon-footer"><MdOutlineMailOutline/></div>
                    <div className="unit-body font-footer">
                      <a href="">
                        info@demolink.org
                      </a>
                    </div>

                  </div>
                </li>
              
              </ul>
           
              <ul className='list-unstyled d-flex' id="footer-socials">
                <li> 
                <SocialIconLink  url={"https://www.facebook.com"}>
                  <FaFacebookF />
                </SocialIconLink>
                 
                </li>
                <li>
                <SocialIconLink  url={"https://www.facebook.com"}>
                  <SlSocialTwitter/>
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
                <li>
                <SocialIconLink  url={"https://www.facebook.com"}>
                  <ImSkype/>
                </SocialIconLink>
                
                </li>
              </ul>
             
          </div>
        </div>
      </div>
    </section>
    <section>
    <div className="container-fluid bg-color-footer">
        <div className="row">
          <div className="col-12 text-center py-3">
            <span className='text-footer'>
                © 2024 Tarian. All Rights Reserved.
            </span>
            <a href="">Privacy Policy</a>
          </div>
        </div>
      </div>
    </section>
   </footer>
  )
}
