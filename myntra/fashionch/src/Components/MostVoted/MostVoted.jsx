import React from 'react'
import './MostVoted.css'
import data_productmv from '../Assets/mostvoted'
import Item from '../Item/Item'

const MostVoted = () => {
  return (
    <div className="popular">
        <h1>MOST POPULAR ENTRIES</h1>
        <hr/>
        <div className="popular-item">
        {data_productmv.map((item,i)=>
            {
                return <Item key={i} id={item.id} name={item.name} image={item.image}/>
            })}
        </div>
     </div>
  )
}

export default MostVoted