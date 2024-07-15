// src/components/Categories2.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Categories2.css';

const Categories2 = () => {
    const [dropdownVisible, setDropdownVisible] = useState('');

    const handleMouseEnter = (category) => {
        setDropdownVisible(category);
    };

    const handleMouseLeave = () => {
        setDropdownVisible('');
    };

    return (
        <div className="categories">
            <div
                className="category"
                onMouseEnter={() => handleMouseEnter('men')}
                onMouseLeave={handleMouseLeave}
            >
                Men
                {dropdownVisible === 'men' && (
                    <div className="dropdown">
                        <span>Tops</span>
                        <span>Bottoms</span>
                        <span>Tees</span>
                        <span>Shoes</span>
                    </div>
                )}
            </div>
            <div
                className="category"
                onMouseEnter={() => handleMouseEnter('women')}
                onMouseLeave={handleMouseLeave}
            >
                Women
                {dropdownVisible === 'women' && (
                    <div className="dropdown">
                        <span>Tops</span>
                        <span>Bottoms</span>
                        <span>Accessories</span>
                        <span>Cosmetics</span>
                        <span>Shoes</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Categories2;
