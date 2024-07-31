import React from 'react'

export default function DeleteCartPageItem({id,DeleteItem}) {
  return (
    <button
      className='btn btn-danger'
      onClick={() => {
        DeleteItem(id);
      }}>
      DELETE
    </button>
  )
}
