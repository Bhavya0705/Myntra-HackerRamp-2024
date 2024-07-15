import React from 'react';
import Header2 from '../components/Header2';
import './StyleSquare.css';

import profile1 from '../assets/profile-images/profile1.png';
import profile2 from '../assets/profile-images/profile2.png';
import profile3 from '../assets/profile-images/profile3.png';
import profile4 from '../assets/profile-images/profile4.png';
import profile5 from '../assets/profile-images/profile5.png';
import profile6 from '../assets/profile-images/profile6.png';
import profile7 from '../assets/profile-images/profile7.png';
import profile8 from '../assets/profile-images/profile8.png';
import profile9 from '../assets/profile-images/profile9.png';
import profile10 from '../assets/profile-images/profile10.png';
import profile11 from '../assets/profile-images/profile11.png';
import profile12 from '../assets/profile-images/profile12.png';
import profile13 from '../assets/profile-images/profile13.png';
import profile14 from '../assets/profile-images/profile14.png';
import profile15 from '../assets/profile-images/profile15.png';
import profile16 from '../assets/profile-images/profile16.png';
import profile17 from '../assets/profile-images/profile17.png';
import profile18 from '../assets/profile-images/profile18.png';
import profile19 from '../assets/profile-images/profile19.png';
import profile20 from '../assets/profile-images/profile20.png';
import { FaHeart, FaShare } from 'react-icons/fa';


const profileImages = [
    profile1, profile2, profile3, profile4, profile5,
    profile6, profile7, profile8, profile9, profile10,
    profile11, profile12, profile13, profile14, profile15,
    profile16, profile17, profile18, profile19, profile20,
];

const StyleSquare = () => {
    return (
        <div className="style-square">
            <Header2 />
            <div className="head">
                <h1>Style Square</h1>
            </div>
            <div className="tabs">
                <button className="tab">My Posts</button>
                <button className="tab">Create Post</button>
                <button className="tab">Liked Posts</button>

            </div>
            <div className="profiles">
            {profileImages.map((image, index) => (
                    <div key={index} className="profile-card">
                        <img src={image} alt={`Profile ${index + 1}`} />
                        <div className="profile-info">
                            {/* <h2>User {index + 1}</h2>
                            <p>Description about the user</p> */}
                            <div className="profile-actions">
                            <FaHeart className="icon" />
                            <FaShare className="icon" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="footer">
                {/* Footer content if any */}
            </div>
        </div>
    );
};
export default StyleSquare;
