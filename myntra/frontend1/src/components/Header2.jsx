// Header.jsx
import React from 'react';
import StylesquareBox from './StylesquareBox';
import SearchBar2 from './SearchBar2';
import { FaBell, FaHeart, FaUser } from 'react-icons/fa';
import './Header2.css'; // Import CSS for header styles

const Header2 = () => {
    return (
        <header className="header">
            <div className="header-content">
                <StylesquareBox />
                <SearchBar2 />
                <div className="header-icons">
                    <FaBell />
                    <FaHeart />
                    <FaUser />
                </div>
            </div>
        </header>
    );
};

export default Header2;
