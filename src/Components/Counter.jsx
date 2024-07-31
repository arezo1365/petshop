import React from 'react'
import useCounter from "../Hooks/useCounter";

export default function Counter({ initval}) {
    const { count, add, subtract } = useCounter(initval);
  return (
    <div className='input-group mb-3'>
      <button  type='button' className='btn' id='button-addon1' onClick={subtract}>
        -
      </button>
      <input
        type='text'
        className='form-control'
        placeholder=''
        aria-label='Example text with button addon'
        aria-describedby='button-addon1'
        readOnly
        value={count}
      />
      <button type='button' className='btn' id='button-addon1' onClick={add}>
        +
      </button>
    </div>
  )
}
