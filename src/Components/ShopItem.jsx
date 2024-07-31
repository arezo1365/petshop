import React from 'react'
import { Link } from 'react-router-dom'


export default function ShopItem({title,price,description,image,id, setCartCount, cartCount }) {
 
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
  const cutStr=(str)=>{
    return `${str.substr(0,100)}.`
  }
  const cutStr2=(str)=>{
    return `${str.substr(0,30)}`
  }
  return (
   
    <>
    <div className="container " >
    <div className="row g-0">
      <div className="col-md-4">
    
        <div className='box-info-modern ms-lg-5'>
           <hr />
            <Link className='box-info-modern-figure ' to={`/singleproduct/${id}`}>
            <img src={image} className="img-fluid rounded-start object-fit-cover"  alt={title}/>
            {/* style={{marginBottom:"3rem",height:"15rem"}} */}
            </Link>
          <hr />
        </div>
        
        

        
      </div>
      
      <div className="col-md-8 d-flex justify-content-center align-items-center">
        <div className="card-body shopitem-card-body m-4 d-inline">
          <h5 className="card-title shopitem-card-title">{cutStr2(title)}</h5>
          <p className="card-text shopitem-card-text">{cutStr(description)}</p>
          <p className="card-text shopitem-card-text-price">{price}</p>
          {/* <div className='hstack '> */}
              {/* <Link to={`/singleproduct/${id}`} href='' className='btn btn-primary mt-auto align-self-start'> click here
              </Link> */}
              <button className='btn btn-danger button-primery2' onClick={() => {addToCart(id);}}>
                ADD TO CART
              </button>
            

          {/* </div> */}
          </div>
      </div>
    </div>
  </div>
  </>
  )
}
