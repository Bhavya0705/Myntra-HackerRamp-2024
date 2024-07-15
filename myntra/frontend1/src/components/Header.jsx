// Header.jsx
import React from 'react';
import TrendsettersBox from './TrendsettersBox';
import SearchBar from './SearchBar';
import { FaBell, FaHeart, FaUser } from 'react-icons/fa';
import './Header.css'; // Import CSS for header styles

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <TrendsettersBox />
                <SearchBar />
                <div className="header-icons">
                    <FaBell />
                    <FaHeart />
                    <FaUser />
                </div>
            </div>
        </header>
    );
};

export default Header;
