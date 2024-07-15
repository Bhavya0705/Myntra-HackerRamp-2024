import React, { useState, useEffect, useRef } from 'react';
import { FaHome, FaStore, FaShoppingBag, FaTheaterMasks, FaPalette } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import './Footer.css';

const Footer = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };


    const handleClickOutside = (event) => {
        console.log("handleClickOutside called");
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            console.log("Click outside detected, closing dropdown");
            setDropdownOpen(false);
        }
    };


    useEffect(() => {
        console.log("Adding event listener for mousedown");
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            console.log("Removing event listener for mousedown");
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <footer className="footer">
            <div className="footer-section">
                <Link to="/">
                    <FaHome />
                    <span>Home</span>
                </Link>
            </div>
            <div className="footer-section">
                <Link to="/behind-the-seams">
                    <FaTheaterMasks />
                    <span>Behind the Seams</span>
                </Link>
            </div>
            <div className="footer-section stores-section" ref={dropdownRef}>
                <div onClick={toggleDropdown} className="stores-link">
                    <FaStore />
                    <span>Stores</span>
                </div>
                {dropdownOpen && (
                    <div className="dropdown-menu">
                        
                        <Link to="/trendsetters">Style Innovators</Link>
                        <Link to="/celebrity-couture">Celebrity Couture</Link>
                        <Link to="/rentals">Rentals</Link>
                        <Link to="/style-square">Style Square</Link>
                        <Link to="/fashion-challenge">Fashion Challenge</Link>
                        <Link to="/fashion-swap">Fashion Swap</Link>
                    </div>
                )}
            </div>
            <div className="footer-section">
                <a href="/all-designers" target="_blank" rel="noopener noreferrer">
                    <FaPalette />
                    <span>All Designers</span>
                </a>
            </div>
            <div className="footer-section">
            <a href="/bag" target="_blank" rel="noopener noreferrer">
                    <FaShoppingBag />
                    <span>Bag</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
