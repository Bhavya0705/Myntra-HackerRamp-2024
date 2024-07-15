import React from 'react';
import './MainImage.css';
import mainImage from '../assets/images/style_inv.png'; // Adjust the path if the image name is different

const MainImage = () => {
    return (
        <div className="main-image">
            <img src={mainImage} alt="Main Display" />
        </div>
    );
};

export default MainImage;
