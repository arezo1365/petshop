import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout({cartCount}) {

  return (
    <>
    <Navbar cartItemsCount={cartCount}/>
      <Outlet/>
    <Footer/>
    </>
  )
}
