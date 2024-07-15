import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import './AllDesigners.css';
import designer1 from '../assets/images/designer1.png';
import designer2 from '../assets/images/designer2.png';
import designer3 from '../assets/images/designer3.png';
import designer4 from '../assets/images/designer4.png';
import designer5 from '../assets/images/designer5.png';
import designer6 from '../assets/images/designer6.png';
import designer7 from '../assets/images/designer7.png';
import designer8 from '../assets/images/designer8.png';

const AllDesigners = () => {
    const navigate = useNavigate();

    const designers = [
        { name: 'Arjun Patel', age: 30, quote: 'Fashion is the armor to survive the reality of everyday life.', image: designer1 },
        { name: 'Priya Sharma', age: 28, quote: 'Style is a way to say who you are without having to speak.', image: designer2 },
        { name: 'Rajesh Kumar', age: 35, quote: 'Fashion fades, only style remains the same.', image: designer3 },
        { name: 'Alisha Rao', age: 26, quote: 'Elegance is not standing out, but being remembered.', image: designer4 },
        { name: 'Neha Gupta', age: 32, quote: 'You can never be overdressed or overeducated.', image: designer5 },
        { name: 'Vikram Singh', age: 29, quote: 'Style is a reflection of your attitude and personality.', image: designer6 },
        {
            name: 'Ananya Mishra', age: 31, quote: 'Fashion is what you buy. Style is what you do with it.', image: designer7,
            onClick: () => navigate('/designer7-details') // Navigate to Designer 7 details page
        },
        { name: 'Meera Iyer', age: 27, quote: 'Trendy is the last stage before tacky.', image: designer8 }
    ];

    return (
        <div className="all-designers">
            <Header />
            <h1>Meet the Style Innovators</h1>
            <div className="designers-grid">
                {designers.map((designer, index) => (
                    <div 
                        key={index} 
                        className="designer-card" 
                        onClick={designer.onClick ? designer.onClick : null}
                        style={{ cursor: designer.onClick ? 'pointer' : 'default' }}
                    >
                        <img src={designer.image} alt={`${designer.name}`} className="designer-image" />
                        <div className="designer-details">
                            <div className="designer-name">{designer.name}</div>
                            <div className="designer-age">Age: {designer.age}</div>
                            <div className="designer-quote">"{designer.quote}"</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllDesigners;
