// src/components/SearchBar.jsx
import React from 'react';
import { FaSearch, FaMicrophone } from 'react-icons/fa';
import './SearchBar2.css'; // Import CSS for styles

const SearchBar = () => {
    return (
        <div className="search-bar">
            <div className="search-icon">
                <FaSearch />
                <input type="text" placeholder="Search for profiles" />
                {/*<span className="placeholder">Search for designers and products</span>*/}
            </div>
            <div className="icons">
                <FaMicrophone />
            </div>
        </div>
    );
};

export default SearchBar;
