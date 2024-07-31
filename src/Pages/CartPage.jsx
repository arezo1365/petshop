import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CartPageItem from '../Components/CartPageItem'

export default function CartPage({ setCartCount }) {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    const clearCart=()=>{
        setCart([])
    }
    useEffect(()=>{
        axios
        .get("https://fakestoreapi.com/products")
        .then((res)=>{
        const cart = JSON.parse(localStorage.getItem("cart"));
        const newCart = cart.map((item) => ({ ...res.data.filter((p) => p.id === item.id)[0], count: item.count }));
        setCart(newCart); 
        setProducts(res.data)
        })
    },[])
    const DeleteItem = (id) => {
        let cart = JSON.parse(localStorage.getItem("cart"));
        localStorage.setItem("cart", JSON.stringify(cart.filter((item) => item.id !== id)));
        cart = JSON.parse(localStorage.getItem("cart"));
        console.log(cart);
        const newCart = cart.map((item) => ({ ...products.filter((p) => p.id === item.id)[0], count: item.count }));
        console.log(newCart);
        setCart(newCart);
        setCartCount(JSON.parse(localStorage.getItem("cart")).length);
        
      }
    

  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-12">
                <h1>CART PAGE</h1>
                <hr />
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>picture</th>
                            <th>Product name</th>
                            <th>Price</th>
                            <th className='titr-quantity-catpage'>
                                Quantity
                            </th>
                            <th>Total</th>
                            <th></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {cart?.map((item)=>(
                            <CartPageItem 
                            picture={item.image}
                            name={item.title}
                            price={item.price}
                            quantity={item.count}
                            key={item.id}
                            id={item.id}
                            DeleteItem={DeleteItem}
                              />

                        ))}
                        

                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
