import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className="item">
        <img className='category-image'src={props.image} alt="" />
        <p>Submitted by - {props.name}</p>
        <button className='vote-button'>VOTE</button>
    </div>
  )
}

export default Item