import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs.jsx'
import GridGallery from './Pages/GridGallery.jsx'
import Shop from './Pages/Shop.jsx'
import SingleProduct from './Pages/SingleProduct.jsx'
import CartPage from './Pages/CartPage.jsx'



function App() {
  const [cartCount, setCartCount] = useState(JSON.parse(localStorage.getItem("cart"))?.length);

  return (
   <Routes>
    <Route path='/' element={<Layout cartCount={cartCount}/>}>
      <Route index element={<Home/>}/>
      <Route path='about us' element={<AboutUs />} />
      <Route path='gridgallery' element={<GridGallery/>} />
      <Route path='shoplist' element={<Shop setCartCount={setCartCount} cartCount={cartCount}/>} />
      <Route path='singleproduct/:shopId' element={<SingleProduct setCartCount={setCartCount} cartCount={cartCount}/>} />
      <Route path='cartpage' element={<CartPage setCartCount={setCartCount}/>} />
      <Route path='*' element={<Error />} />

    </Route>
   </Routes>
  )
}

export default App
