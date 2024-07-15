import React from 'react';
import './Categories.css';
import shirts from '../assets/images/shirts.png';
import tees from '../assets/images/tees.png';
import tops from '../assets/images/tops.png';
import bottoms from '../assets/images/bottoms.png';
import dresses from '../assets/images/dresses.png';
import cosmetics from '../assets/images/cosmetics.png';

const categories = [
    { name: 'Shirts', image: shirts },
    { name: 'Tees', image: tees },
    { name: 'Tops', image: tops },
    { name: 'Bottoms', image: bottoms },
    { name: 'Dresses', image: dresses },
    { name: 'Cosmetics', image: cosmetics },
    // Add more categories as needed
];

const Categories = () => {
    return (
        <div className="categories">
            {categories.map((category, index) => (
                <div className="category" key={index}>
                    <img src={category.image} alt={category.name} />
                    <span>{category.name}</span>
                </div>
            ))}
        </div>
    );
};

export default Categories;
