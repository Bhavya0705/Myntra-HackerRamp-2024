import React from 'react'
import './Breadcrumbs.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
const Breadcrumbs = (props) => {
    const {product} = props;
  return (
    <div className="breadcrum">
        HOME <img src={arrow_icon} alt=""/> GALLERY <img src={arrow_icon} alt=""/> {product.category} <img src={arrow_icon} alt=""/>
    </div>
  )
}

export default Breadcrumbs