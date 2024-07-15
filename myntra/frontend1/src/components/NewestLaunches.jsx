import React from 'react';
import './NewestLaunches.css';
import dress1 from '../assets/images/dress1.png';
import dress2 from '../assets/images/dress2.png';
import dress3 from '../assets/images/dress3.png';
import dress4 from '../assets/images/dress4.png';
import dress5 from '../assets/images/dress5.png';
import dress6 from '../assets/images/dress6.png';
import dress7 from '../assets/images/dress7.png';
import dress8 from '../assets/images/dress8.png';

const newestLaunches = [
    { image: dress1 },
    { image: dress2 },
    { image: dress3 },
    { image: dress4 },
    { image: dress5 },
    { image: dress6 },
    { image: dress7 },
    { image: dress8 },
];

const NewestLaunches = () => {
    return (
        <div className="newest-launches">
            <h2>Newest Launches</h2>
            <div className="launches-grid">
                {newestLaunches.map((launch, index) => (
                    <div key={index} className="launch-item">
                        <img src={launch.image} alt={`Launch ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewestLaunches;
