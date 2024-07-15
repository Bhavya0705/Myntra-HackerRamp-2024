// Header.jsx
import React from 'react';
import RentalBox from './RentalBox';
import SearchBar3 from './SearchBar3';
import { FaBell, FaHeart, FaUser } from 'react-icons/fa';
import './Header3.css'; // Import CSS for header styles

const Header3 = () => {
    return (
        <header className="header">
            <div className="header-content">
                <RentalBox />
                <SearchBar3 />
                <div className="header-icons">
                    <FaBell />
                    <FaHeart />
                    <FaUser />
                </div>
            </div>
        </header>
    );
};

export default Header3;
