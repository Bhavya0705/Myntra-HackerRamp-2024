import React, { useContext } from 'react'
import './CSS/GalleryCategory.css'
import { GalleryContext } from '../Context/GalleryContext'
import Item from '../Components/Item/Item'

const GalleryCategory = (props) => {
  const {all_products} = useContext(GalleryContext);
  return (
    <div className="shop-category">
      <img className='gallerycategory-banner' src={props.banner} alt=''/>
      <p>Most Trending Looks</p>
     <div className="gallerycategory-products">
       {all_products.map((item,i)=>
      {
        if(props.category===item.category)
        {
          return <Item key={i} id={item.id} image={item.image}/>
        }
        else{
          return null;
        }
      })}
     </div>
    </div>
  )
}

export default GalleryCategory