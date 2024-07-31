import React from 'react'
import about1or from "../assets/about/original/about-1-or.jpg"
import about2or from "../assets/about/original/about-2-or.jpg"
import about3or from "../assets/about/original/about-3-or.jpg"
import about4or from "../assets/about/original/about-4-or.jpg"
import about1th from "../assets/about/thumbnail/about-1-th.jpg"
import about2th from "../assets/about/thumbnail/about-2-th.jpg"
import about3th from "../assets/about/thumbnail/about-3-th.jpg"
import about4th from "../assets/about/thumbnail/about-4-th.jpg"
import breadcrumbs from "../assets/breadcrumbs-bg/breadcrumbs-bg.jpg"
import AboutSwiper from '../Components/AboutSwiper'
import AboutAfewWord from '../Components/AboutAfewWord'
import BoxCtaHomeAboutUs from '../Components/BoxCtaHomeAboutUs'
import OurTeamHome from '../Components/OurTeamHome'
import ClientSayHomeAbout from '../Components/ClientsSayHomeAboutUs'
import PerpleRowHome from '../Components/PerpleRowHome'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import "leaflet/dist/leaflet.css"
import { Marker, Popup } from 'react-leaflet'





export default function AboutUs() {
  const position = [35.744841942887035, 51.37557629756234]
  
  const styleBreadCrumbImg={
    backgroundImage:  `url(${breadcrumbs})`,
    display:"block",
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  
  }
  return (
    <>
     
    <section className='breadcrumbs-custom'>
      <div className='parallax-container'>
        <div className='material-parallax parallax'>
          <img src={breadcrumbs}  style={styleBreadCrumbImg}/>
        </div>
        <div className='breadcrumbs-custom-body  parallax-content context-dark'>
          <div className="container">
            <h2 className='breadcrumbs-custom-title-aboutus'>About Us</h2>
            <h5 className="breadcrumbs-custom-text-aboutus">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do   
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              
            </h5>
          </div>
        </div>
      </div>
    </section>
    <div className="container " >
     
      <div className="row">
        <div className="col-lg-6 col-md-11 col-xl-5 mt1 mt2">
          <AboutAfewWord/>
        </div>
        <div className="col-lg-6 col-md-11 col-xl-7 mt1">
        <AboutSwiper pics={[about1or,about2or,about3or,about4or]} thunbs={[about1th,about2th,about3th,about4th]} />
        </div>
      </div>
    </div>
    <section>
      <BoxCtaHomeAboutUs/>
    </section>
    <section className='bg-gray-1'>
    <div className="container "style={{marginTop: '150px'}} >
      <h2 className='Titr-ourteam-home'>Our team</h2>
        <div className="row justify-content-between">
          <div className="col text-center">
            <OurTeamHome/>
            </div>
        </div>
      </div>
    </section>
    <section className='section3 bg-default'>
        <div className="container">
            <h2 className='fadeScale'>Testimonials</h2>
            <ClientSayHomeAbout/>
        </div>
    </section>
    <section className='section9' style={{backgroundColor:"#ffffff"}}>
      <div className="container">
        <div className="row ">
          <div className="col-12 ">
            <PerpleRowHome/>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container-fluid my-4 p-0">
        <div className="row py-4">
          <div className="col-12">
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{height:'450px'}}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                 برج میلاد تهران
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
    </>
    
   )
}
