// src/components/SearchBar.jsx
import React from 'react';
import { FaSearch, FaCamera, FaMicrophone } from 'react-icons/fa';
import './SearchBar.css'; // Import CSS for styles

const SearchBar = () => {
    return (
        <div className="search-bar">
            <div className="search-icon">
                <FaSearch />
                <input type="text" placeholder="Search for designers and products" />
                {/*<span className="placeholder">Search for designers and products</span>*/}
            </div>
            <div className="icons">
                <FaCamera />
                <FaMicrophone />
            </div>
        </div>
    );
};

export default SearchBar;
