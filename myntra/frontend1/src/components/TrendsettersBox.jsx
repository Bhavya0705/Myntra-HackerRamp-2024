
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { IoMdArrowDropdown } from 'react-icons/io'; // Import down arrow icon
import './TrendsettersBox.css';
import myntraImg from '../assets/images/Myntra.png'; // Import image for logo

const TrendsettersBox = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        // Redirect to another page or route when clicked
        navigate('/trendsetters'); // Adjust the path as needed
    };

    return (
        <div className="trendsetters-box">
            <div className="logo-section">
                <img src={myntraImg} alt="Myntra Logo" className="logo-img" />
            </div>
            <div className="text-section" onClick={handleClick}>
                Style Innovators <IoMdArrowDropdown />
            </div>
        </div>
    );
};

export default TrendsettersBox;
