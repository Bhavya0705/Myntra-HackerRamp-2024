// src/components/ProductCard.jsx
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, name, rent }) => {
    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />
            <div className="product-info">
                <h3>{name}</h3>
                <p>Rent: ${rent}</p>
            </div>
        </div>
    );
};

export default ProductCard;
