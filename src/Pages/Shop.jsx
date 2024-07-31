import React, { useState } from 'react'
import useGetAPI from '../Hooks/useGetAPI'
import paginate from '../sevices/utils';
import ShopItem from '../Components/ShopItem';
import PopularProduct from '../Components/PopularProduct';
import Categories from '../Components/Categories';


export default function Shop({setCartCount,cartCount}) {
    const {data}=useGetAPI('https://fakestoreapi.com/products')
    const paginateData = paginate(data);
    const [page,setPage]=useState(0)
    
  return (
    <div className="container shop-container">
        <div className="row shopitem-top-style justify-content-center">
           <div className=" col-xl-3 col-lg-4 col-sm-12 col-md-12">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-12 col-md-9 col-sm-9">
                      <PopularProduct/>
                  </div>
                  <div className="col-lg-12 col-md-3 col-sm-3">
                  <Categories/>
                  </div>
                </div>
           </div>
            <div className="col-xl-9 col-lg-8 col-sm-12 ">
              <div className="row">
            {paginateData[page]?.map((item)=>
            <div className="col-lg-12 " key={item.id}>
              <ShopItem {...item}
                    setCartCount={setCartCount}
                    cartCount={cartCount}
                    />
            </div>
            )}
            </div>
            </div>
            
        </div>
        <div className='row my-5'>
      
          <div className='col-8'>
            <nav aria-label='Page navigation example'>
              <ul className='pagination justify-content-center align-items-center'>
                
                {paginateData.map((_, i) => (
                  <>
                  
                  <li className='page-item' key={i}>
                    <button
                      className='page-link'
                      onClick={() => {
                        setPage(i);
                      }}>
                      {i + 1}
                    </button>
                  </li>
                  </>
                  
                ))}
              </ul>
            </nav>
          </div>
        </div>
    </div>
  )
}

