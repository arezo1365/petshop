import React from 'react'

export default function AboutUsHome() {
  return (
    // id="tabs-1" 
    <>
        <div className="tabs-custom tabs-jean" id="tabs-1" >
             
            <div className="tab-content">
                
                <div className="tab-pane fade show active showtab-pane " id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                    <div className="box-info-creative">
                        <h4 className="box-info-creative-title">
                            <a href="">Our Pet Shop’s mission lies in providing quality care for pets.</a>
                        </h4>
                        <div className="box-info-creative-text">
                        We want our clients and their pets to receive the best service and goods, that’s why we work only with proven and respected manufacturers.
                        </div>
                        <a href="" className='link-classic box-info-creative-link'>Read more</a>
                    </div>
                </div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                    <div className="box-info-creative">
                        <h4 className="box-info-creative-title">
                            <a href="">Aiming to be the leading place for pet care and shopping</a>
                        </h4>
                        <div className="box-info-creative-text">
                        Our vision at Tarian is to become the #1 online store for pets as well as the space where owners can get any kind of pet-related services at an affordable price.                        </div>
                        <a href="" className='link-classic box-info-creative-link'>Read more</a>
                    </div>
                </div>
              <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                    <div className="box-info-creative">
                        <h4 className="box-info-creative-title">
                            <a href="">We always strive for being professional and consistent</a>
                        </h4>
                        <div className="box-info-creative-text">
                        Our work is defined by certain values that include excellence, care, professionalism, innovation, and consistency. We aim to provide the best pet care services to you.                        </div>
                        <a href="" className='link-classic box-info-creative-link'>Read more</a>
                    </div>
              </div>
               
            </div>
        </div>
        <nav className='d-flex justify-content-center align-items-center'>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button 
                  className="nav-link active  border-0 px-4 "
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  OUR MISSION
                </button>
                <button
                  className="nav-link px-4"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  OUR VISION
                </button>
                <button
                  className="nav-link px-4"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contact"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  OUR VALUES
                </button>
              </div>
        </nav>
    </>
  )
}
