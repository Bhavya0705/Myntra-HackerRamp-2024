import React, { useState } from 'react';
import Header3 from '../components/Header3';
import './ProductDetail.css'; // Import your CSS file for styling
import mainProductImage from '../assets/images/main-product-image.png'; // Import main product image
import sideImage1 from '../assets/images/side-image1.png'; // Import side image 1
import sideImage2 from '../assets/images/side-image2.png'; // Import side image 2

const ProductDetail = () => {

    const [isAccidentalDamageCovered, setIsAccidentalDamageCovered] = useState(false);
    // Hardcoded product details for demonstration
    const productDetails = {
        name: 'GRECIILOOKS Womens Kurta Set',
        price: 'Rs. 300/Day',
        price2: 'Rs. 700/Weekly',

        // Add more details as needed
    };

    // Event handler to handle image hover effect
    const handleImageHover = (imageId) => {
        // Logic to handle image hover effect (if needed)
    };

    // State for payment options
    const [selectedPaymentOption, setSelectedPaymentOption] = useState('subscription');

    return (
        <div className="product-detail">
            <Header3 />
            <div className="product-images">
                {/* Main product image */}
                <div className="main-image-container">
                    <img
                        src={mainProductImage}
                        alt="Main Product"
                        className="main-image"
                    />
                </div>

                {/* Side profile images */}
                <div className="side-images">
                    <div className="side-image-container">
                        <img
                            src={sideImage1}
                            alt="Side Image 1"
                            className="side-image"
                            onMouseEnter={() => handleImageHover('side-image1')}
                            onMouseLeave={() => handleImageHover(null)}
                        />
                    </div>
                    <div className="side-image-container">
                        <img
                            src={sideImage2}
                            alt="Side Image 2"
                            className="side-image"
                            onMouseEnter={() => handleImageHover('side-image2')}
                            onMouseLeave={() => handleImageHover(null)}
                        />
                    </div>
                    {/* Add more side profile images as needed */}
                </div>
            </div>

            {/* Product details */}
            <div className="product-details">
                <h2>{productDetails.name}</h2>
                
                <p className="price">{productDetails.price}</p>
                <p className="price2">{productDetails.price2}</p>

                <div className="accidental-damage">
                    <label>
                        <input
                            type="checkbox"
                            checked={isAccidentalDamageCovered}
                            onChange={() => setIsAccidentalDamageCovered(!isAccidentalDamageCovered)}
                        />
                        Cover accidental damage (extra Rs. 200 charge)
                    </label>
                </div>
                
                {/* Payment methods and rules & regulations */}
                <div className="payment-method">
                    
                    
                </div>
                <div className="rules-and-regulations">
                    <h2>Rules and Regulations</h2>
                    <ul>
                        <li>All rented items must be returned in their original condition.</li>
                        <li>Late returns will incur additional charges.</li>
                        <li>Damaged or lost items will be charged at their full retail price.</li>
                        <li>Subscription plans are non-refundable and non-transferable.</li>
                        <li>Pay-per-use rentals must be paid for in advance.</li>
                        <li>We reserve the right to refuse service to anyone who violates our terms.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
