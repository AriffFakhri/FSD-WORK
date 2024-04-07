import React from 'react'
import './Breadcrums.css'
import arrow_icons from '../Asset/breadcrum_arrow.png'

export const Breadcrums = (props) => {
    const {product} = props
      return (
    <div className='breadcrums'>
        HOME <img src={arrow_icons} alt="" /> SHOP <img src={arrow_icons} alt="" /> {product.category} <img src={arrow_icons} alt="" /> {product.name} <img src={arrow_icons} alt="" />
    </div>
  )
}
