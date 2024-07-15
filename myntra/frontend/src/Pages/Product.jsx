import React, { useContext } from 'react'
import { GalleryContext } from '../Context/GalleryContext'
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
const Product = () => {
  const {all_products}= useContext(GalleryContext);
  const {productId} = useParams();
  const product = all_products.find((e)=> e.id===Number(productId))
  return (
     <div>
       <Breadcrumbs product={product}/>
       <ProductDisplay product = {product}/>
     </div>
  )
}

export default Product