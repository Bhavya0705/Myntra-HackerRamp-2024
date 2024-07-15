import React from 'react';
import './Designer7Details.css';
import Header from '../components/Header';
import product1Image from '../assets/images/product1.png';
import product2Image from '../assets/images/product2.png';
import product3Image from '../assets/images/product3.png';
import product4Image from '../assets/images/product4.png';
import product5Image from '../assets/images/product5.png';
import product6Image from '../assets/images/product6.png';
import product7Image from '../assets/images/product7.png';
import product8Image from '../assets/images/product8.png';
import product9Image from '../assets/images/product9.png';
import product10Image from '../assets/images/product10.png';
import designer7Image from '../assets/images/designer7.png';

const products = [
    { id: 1, name: 'SURKH SHIBORI COTTON DRESS', designer: 'Ananya Mishra', price: 'Rs. 1000', image:product1Image },
    { id: 2, name: 'Women Jacket Kashmiri Embroidery', designer: 'Ananya Mishra', price: 'Rs. 1200', image: product2Image},
    { id: 3, name: 'Hand Block Printed Midi Dress', designer: 'Ananya Mishra', price: 'Rs. 950', image:product3Image },
    { id: 4, name: 'Gucci Jacquard-Leather Belted Trench Coat', designer: 'Ananya Mishra', price: 'Rs. 800', image: product4Image},
    { id: 5, name: 'Grancy PINK Women Ready to Wear Saree', designer: 'Ananya Mishra', price: 'Rs. 1100', image: product5Image},
    { id: 6, name: 'DIVENA Women Floral Pattern Anarkali Kurta Set', designer: 'Ananya Mishra', price: 'Rs. 1300', image:product6Image },
    { id: 7, name: 'Designer Indian Foil Print One Shoulder Dress', designer: 'Ananya Mishra', price: 'Rs. 850', image: product7Image},
    { id: 8, name: 'Danish Zehen Printed Polyester Tshirt', designer: 'Ananya Mishra', price: 'Rs. 750', image: product8Image},
    { id: 9, name: 'Sale PAISLEY LONG JACKET', designer: 'Ananya Mishra', price: 'Rs. 900', image:product9Image },
    { id: 10, name: 'Alanna - Floral Motif Dress - White', designer: 'Ananya Mishra', price: 'Rs. 1000', image:product10Image},
    
];

const Designer7Details = () => {
    return (
        <div className="designer7Details">
            <Header />
            <div className="designerProfile">
                <img src={designer7Image} alt="Designer 7" className="designerImage" />
                <div className="designerInfo">
                    <h1>Ananya Mishra</h1>
                    <p className="designerAge">Age: 31</p>
                    <p className="designerQuote">"Fashion is what you buy. Style is what you do with it."</p>
                    <p className="designerPhilosophy"><strong>Philosophy:</strong> Bold, innovative, and timeless.</p>
                    <p className="designerBio"><strong>Biography:</strong> Designer 7 is known for blending traditional techniques with contemporary aesthetics, creating unique and stunning pieces.</p>
                </div>
            </div>
            <div className="designerCollection">
                <h2>Explore their collection</h2>
                <div className="productGrid">
                {products.map((product) => (
                        <div key={product.id} className="productCard">
                             <img src={product.image} alt={product.name} className="productImage" />
                            <div className="productDetails">
                                <p className="productName">{product.name}</p>
                                <p className="productDesigner">{product.designer}</p>
                                <p className="productPrice">{product.price}</p>
                    </div>
                {/* Add collection items here */}
            </div>
                ))}
                </div>
                </div>
        </div>
    );
};

export default Designer7Details;
