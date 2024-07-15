import Header3 from '../components/Header3';
import { useState, useEffect } from 'react';
import Rentalsimg from '../components/Rentalsimg';
import React from 'react';
import Categories2 from '../components/Categories2';
import './Rentals.css';
import axios from 'axios';
import ProductCard2 from '../components/ProductCard2';
import { Link } from 'react-router-dom'; 
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import image4 from '../assets/images/image4.png';
import image5 from '../assets/images/image5.png';
import image6 from '../assets/images/image6.png';
import image7 from '../assets/images/image7.png';
import image8 from '../assets/images/image8.png';
import image9 from '../assets/images/image9.png';
import image10 from '../assets/images/image10.png';// Import Link from react-router-dom

// src/pages/Rentals.jsx

const Rentals = () => {
    const [activeTab, setActiveTab] = useState('regular');
    const [selectedPaymentOption, setSelectedPaymentOption] = useState('subscription');
    // const [topRentedItems, setTopRentedItems] = useState([]);
    // const [newestItems, setNewestItems] = useState([]);

    const newestItems = [
        { _id: 1, name: 'TRILLMIXA One Piece Dress for Women', rentAmount: 100, image: image2 },
        { _id: 2, name: 'FUBACK Women Rayon Trousers', rentAmount: 150, image: image1 },
        { _id: 3, name: 'GRECIILOOKS Womens Kurta Set', rentAmount: 200, image: image4 },
        { _id: 4, name: 'Leriya Printed Women Jumpsuit', rentAmount: 250, image: image3 },
        { _id: 5, name: 'Rahi Trendz Women White Top ', rentAmount: 300, image: image5 }
    ];

    const topRentedItems = [
        { _id: 6, name: 'OM SAI Rayon Top for Women', rentAmount: 350, image: image6 },
        { _id: 7, name: 'Leriya Fashion Women Crepe Top', rentAmount: 400, image: image7 },
        { _id: 8, name: 'Leriya Fashion Oversized Shirt', rentAmount: 450, image: image8 },
        { _id: 9, name: 'Women Front Open Floral Top', rentAmount: 500, image: image9 },
        { _id: 10, name: 'Leriya Fashion Western Dress', rentAmount: 550, image: image10 }
    ];


    // useEffect(() => {
    //     fetchTopRentedItems();
    //     fetchNewestItems();
    // }, []);

    // const fetchTopRentedItems = async () => {
    //     try {
    //         const response = await axios.get('http://localhost:5000/api/top-rented-items');
    //         console.log('Top Rented Items:', response.data); 
    //         setTopRentedItems(response.data);
    //     } catch (error) {
    //         console.error('Error fetching top rented items', error);
    //     }
    // };

    // const fetchNewestItems = async () => {
    //     try {
    //         const response = await axios.get('http://localhost:5000/api/newest-items');
    //         console.log('Newest Items:', response.data);  
    //         setNewestItems(response.data);
    //     } catch (error) {
    //         console.error('Error fetching newest items', error);
    //     }
    // };

    return (
        <div className="rentals">
            <Header3 />

            <div className="tabs">
                <button
                    className={`tab ${activeTab === 'regular' ? 'active' : ''}`}
                    onClick={() => setActiveTab('regular')}
                >
                    Regular Rentals
                </button>
                <button
                    className={`tab ${activeTab === 'luxury' ? 'active' : ''}`}
                    onClick={() => setActiveTab('luxury')}
                >
                    Luxury Rentals
                </button>
            </div>
            <Categories2 />
            <div className="rentals-img-container">
                <Rentalsimg className="rentals-img" />
            </div>
            <div className="tab-content">
                {activeTab === 'regular' ? (
                    <div>
                        <div className="newest-in-town">
                            <h2>Newest in Town</h2>
                            <div className="product-cards">
                            {newestItems.map(item => (
                                    <ProductCard2 key={item._id} item={item} />
                                ))}
                            </div>
                        </div>
                        <div className="top-rented-items">
                            <h2>Top Rented Items</h2>
                            <div className="product-cards">
                                {topRentedItems.map(item => (
                                    <ProductCard2 key={item._id} item={item} />
                                ))}
                            </div>
                        </div>
                        {/* <div className="payment-method">
                            <h2>Payment Methods</h2>
                            <div className="payment-options">
                                <label>
                                    <input
                                        type="radio"
                                        name="paymentOption"
                                        value="subscription"
                                        checked={selectedPaymentOption === 'subscription'}
                                        onChange={() => setSelectedPaymentOption('subscription')}
                                    />
                                    Subscription Plans
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="paymentOption"
                                        value="pay-per-use"
                                        checked={selectedPaymentOption === 'pay-per-use'}
                                        onChange={() => setSelectedPaymentOption('pay-per-use')}
                                    />
                                    Pay-per-Use Option
                                </label>
                            </div>
                            {selectedPaymentOption === 'subscription' && (
                                <div className="subscription-plans">
                                    <h3>Subscription Plans</h3>
                                    <p>We offer flexible subscription plans to fit your needs:</p>
                                    <ul>
                                        <li><strong>Monthly Subscription:</strong> Enjoy unlimited rentals for a flat monthly fee.</li>
                                        <li><strong>Seasonal Subscription:</strong> Get access to our collection for an entire season at a discounted rate.</li>
                                    </ul>
                                </div>
                            )}
                            {selectedPaymentOption === 'pay-per-use' && (
                                <div className="pay-per-use">
                                    <h3>Pay-per-Use Option</h3>
                                    <p>Prefer to pay only for what you use? Our pay-per-use option allows you to rent items individually without any commitments.</p>
                                </div>
                            )} */}
                        </div>
                        
                
                ) : (
                    <div>
                        <div className="newest-in-town">
                            <h2>Newest in Town</h2>
                            <div className="product-cards">
                                {newestItems.map(item => (
                                    <Link key={item._id} to={`/product/${item._id}`} className="product-card">
                                        <img src={item.image} alt={item.name} />
                                        <div className="product-info">
                                            <h4>{item.name}</h4>
                                            <p>{item.rentAmount}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="top-rented-items">
                            <h2>Top Rented Items</h2>
                            <div className="more-link">
                                <a href="/more-top-rented">More</a>
                            </div>
                            <div className="product-cards">
                                {topRentedItems.map(item => (
                                    <div key={item._id} className="product-card">
                                        <img src={item.image} alt={item.name} />
                                        <div className="product-info">
                                            <h4>{item.name}</h4>
                                            <p>Rs. {item.dailyRent}/day</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                    </div>
                )}
            </div>
        </div>
    );
};

export default Rentals;
