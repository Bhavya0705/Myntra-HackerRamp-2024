import React from 'react';
import './Rentalsimg.css';
import Rentals from '../assets/images/Rentals.png'; // Adjust the path if the image name is different

const Rentalsimg = () => {
    return (
        <div className="main-image">
            <img src={Rentals} alt="Main Display" />
        </div>
    );
};

export default Rentalsimg;
