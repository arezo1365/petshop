import React from 'react'
import {MdCategory, MdOutlinePets} from "react-icons/md"

export default function Categories() {
  return (
    <article>
        <div className='mt-5'>
        <div className="categorie-titr-left">
        <h6 className='aside-title mb-3'><MdCategory  size={'2rem'}color='#959af1' />Categories</h6>

        </div>
        <div className="categorie-titr-right"> 
            <ul className='ps-0'>
                <li className='d-flex justify-content-between align-items-center mb-3'>
                <span className='checkbox-custom-dummy '>
                            ALL
                </span>
                <span className='list-shop-filter-number'>
                            (18)
                </span>
                </li>
                <li className='d-flex justify-content-between align-items-center mb-3'>
                <span className='checkbox-custom-dummy '>
                            Balloons
                </span>
                <span className='list-shop-filter-number'>
                            (9)
                </span>
                </li>
                <li className='d-flex justify-content-between align-items-center mb-3'>
                <span className='checkbox-custom-dummy '>
                            Gifts
                </span>
                <span className='list-shop-filter-number'>
                            (5)
                </span>
                </li>
                <li className='d-flex justify-content-between align-items-center mb-3'>
                <span className='checkbox-custom-dummy '>
                        Postcards
                </span>
                <span className='list-shop-filter-number'>
                            (8)
                </span>
                </li>
            </ul>
        </div>
        </div>
        

         
    </article>
  )
}
