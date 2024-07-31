import React from 'react'
import DeleteCartPageItem from './DeleteCartPageItem'
import Counter from '../Components/Counter'


export default function CartPageItem({ name, price, quantity, id, DeleteItem, picture }) {
  return (
    <tr>
      <td>
        <img src={picture} alt={name} className='img-fluid' style={{ width: "5rem" }} />
      </td>
      <td>{name}</td>
      <td>{price}</td>
      {/* <td><Counter initval={1}/></td> */}
      <td>{quantity}</td>
      <td>{price * quantity}</td>
      <td>
      <DeleteCartPageItem id={id} DeleteItem={DeleteItem} />
      </td>
    </tr>
  )
}
