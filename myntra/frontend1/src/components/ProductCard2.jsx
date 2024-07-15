// src/components/ProductCard2.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard2.css';

const ProductCard2 = ({ item }) => {
    return (
        <Link to={`/product/${item._id}`} className="product-card">
            <img src={item.image} alt={item.name} />
            <div className="product-info">
                <h4>{item.name}</h4>
                <p>Rs. {item.rentAmount}/day</p>
            </div>
        </Link>
    );
};

export default ProductCard2;
