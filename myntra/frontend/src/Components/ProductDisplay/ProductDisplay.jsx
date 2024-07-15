import React from 'react'
import './ProductDisplay.css'

import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image2} alt="" />
                <img src={product.image3} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
               <img src ={star_icon} alt="" />
               <img src ={star_icon} alt="" />
               <img src ={star_icon} alt="" />
               <img src ={star_icon} alt="" />
               <img src ={star_dull_icon} alt="" />
               <p>(122)</p>
            </div>
            <div className="productdisplay-right-description">
                She dazzled in a stunning, intricately created outfit, featuring a dramatic look that embodied the night's theme. Her look was complete with vintage-inspired accessories, making her the epitome of elegance and sophistication.
            </div>
            <div className="productdisplay-right-size">
                <h1>Outfit Details</h1>
                <div className="productdisplay-right-size">
                    <div className="productdisplay-right-size-text">Coat - Versace - ₹8200 </div>
                    <div className="productdisplay-right-size-text">Trousers - Versace - ₹5100</div>
                    <div className="productdisplay-right-size-text">Earrings - Swarovski - ₹9500 </div>
                </div>
            </div>
            <button>WISHLIST LOOK</button>
        </div>
    </div>
  )
}

export default ProductDisplay