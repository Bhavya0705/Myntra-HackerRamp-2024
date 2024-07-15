import React from 'react'
import './Item.css'

const Item = (props) => {
    return (
      <div className="item">
          <img className='category-image'src={props.image} alt="" />
          <p>Product Name - {props.name_prod}</p>
          <p>Owner Name - {props.name_own}</p>
          <button className='vote-button'>SWAP</button>
      </div>
    )
  }
  

export default Item