import React from 'react'
import {FaComment, FaEye, FaPlus} from 'react-icons/fa6'
import styles from "./ProjectLatest.module.css"

export default function ProjectLatest({id,title,views,comments,photo,category,size}) {
  return (
    <div className={`${styles['project-box']} grid-col-${size.cols} grid-row-${size.rows} text-bg-danger position-relative overflow-hidden`}>{title}
        <div className='position-absolute top-0 start-0 end-0 bottom-0'>
            <img src={photo} alt="" className='w-100 h-100 object-fit-cover'/>
        </div>
      
    </div>
    
  )
}
