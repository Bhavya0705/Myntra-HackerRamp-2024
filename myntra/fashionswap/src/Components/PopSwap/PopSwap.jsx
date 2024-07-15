import React from 'react'
import './PopSwap.css'
import data_product from '../Assets/popswap'
import Item from '../Item/Item'

const PopSwap = () => {
  return (
    <div className="popular">
        <h1>Most Popularly Swapped</h1>
        <hr/>
        <div className="popular-item">
        {data_product.map((item,i)=>
            {
                return <Item key={i} id={item.id} name_prod={item.name_prod} name_own={item.name_own} image={item.image}/>
            })}
        </div>
     </div>
  )
}

export default PopSwap