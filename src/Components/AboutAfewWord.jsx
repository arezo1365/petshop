import React from 'react'
import { VscQuote } from "react-icons/vsc";


export default function AboutAfewWord() {
  const styleVscquote={
    marginTop: '0.5rem',
    marginRight:' 1rem',
    lineHeight: '1.53',
    fontSize: '38px',
    color: '#959af1',

  }
  
  return (
    
    <>
        <section className='p-0 m-0'>
          <article className='quote-classic-big text-uppercase inset-xl-right-30 '>
            <div className=' heading-3 quote-classic-big-text d-lg-flex d-md-flex'>
              <VscQuote style={styleVscquote} className='q2' />
              <div className='q2'>A Few words About Us</div>
            </div>
          </article>
          <div className="tabs-custom tabs-horizontal tabs-line" id='tabs-1'>
            <div className='nav-tabs-wrap'>
              <ul className="nav nav-tabs mb-3 mt-5">
                <li className='nav-item'>
                  <a class="nav-link active" href="#tabs-1-1" data-bs-toggle="tab">About</a>
                </li>
                <li className='nav-item'>
                  <a class="nav-link" href="#tabs-1-2" data-bs-toggle="tab">Our mission</a>
                </li>
                <li className='nav-item'>
                  <a class="nav-link" href="#tabs-1-3" data-bs-toggle="tab">Our goals</a>
                </li>
               
              </ul>
            </div>
            <div className="tab-content mt-4">
              <div className="tab-pane fade show active mb-5" id="tabs-1-1">
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
          <div className='margin-button-aboutus'><a href="" className='button button-lg button-primery'>Read more</a></div>
        </section>
  
    </>
  )
}
