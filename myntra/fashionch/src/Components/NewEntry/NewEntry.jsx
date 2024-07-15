import React from 'react'
import './NewEntry.css'
import data_product from '../Assets/newentry'
import Item from '../Item/Item'

const NewEntry = () => {
  return (
    <div className="popular">
        <h1>NEW ENTRIES</h1>
        <hr/>
        <div className="popular-item">
        {data_product.map((item,i)=>
            {
                return <Item key={i} id={item.id} name={item.name} image={item.image}/>
            })}
        </div>
     </div>
  )
}

export default NewEntry