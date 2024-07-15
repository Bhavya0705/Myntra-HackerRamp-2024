
import React, { useState } from 'react';
import './Bag.css';
import Header3 from '../components/Header3';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
const Bag = () => {
    const [rentOptions, setRentOptions] = useState({});
    const [extensionOptions, setExtensionOptions] = useState({});
    const [buyoutOptions, setBuyoutOptions] = useState({});

    const bagItems = [
        { _id: 1, name: 'FUBACK Women Rayon Trousers', dailyRent: 100, weeklyRent: 600, buyoutPrice: 1000, image: image1 },
        { _id: 2, name: 'TRILLMIXA One Piece Dress for Women', dailyRent: 150, weeklyRent: 900, buyoutPrice: 1500, image: image2 }
    ];

    const handleRentOptionChange = (id, option) => {
        setRentOptions(prevOptions => ({
            ...prevOptions,
            [id]: option
        }));

        // Deselect buyout option if changing rental option
        if (buyoutOptions[id]) {
            handleBuyoutChange(id, false);
        }
    };

    const handleExtensionChange = (id, days) => {
        setExtensionOptions(prevOptions => ({
            ...prevOptions,
            [id]: days
        }));

        // Deselect buyout option if extending rental period
        if (buyoutOptions[id]) {
            handleBuyoutChange(id, false);
        }
    };

    const handleBuyoutChange = (id, checked) => {
        setBuyoutOptions(prevOptions => ({
            ...prevOptions,
            [id]: checked
        }));

        // Deselect rental options if buyout is selected
        if (checked) {
            setRentOptions(prevOptions => ({
                ...prevOptions,
                [id]: undefined
            }));
            setExtensionOptions(prevOptions => ({
                ...prevOptions,
                [id]: undefined
            }));
        }
    };

    const getTotalAmount = () => {
        return bagItems.reduce((total, item) => {
            if (buyoutOptions[item._id]) {
                return total + item.buyoutPrice; // Use buyout price if buyout option is selected
            }
            const rentOption = rentOptions[item._id] || 'daily';
            const rentAmount = rentOption === 'daily' ? item.dailyRent : item.weeklyRent;
            const extensionDays = extensionOptions[item._id] || 0;
            const extendedRentAmount = rentAmount * extensionDays;
            return total + extendedRentAmount;
        }, 0);
    };

    return (
        <div className="bag">
        <Header3 />
            <h1>Your Rentals Bag</h1>
            <div className="bag-items">
                {bagItems.map(item => (
                    <div key={item._id} className="bag-item">
                        <img src={item.image} alt={item.name} />
                        <div className="item-info">
                            <h4>{item.name}</h4>
                            <p>
                                <label>
                                    <input
                                        type="radio"
                                        name={`rentOption-${item._id}`}
                                        value="daily"
                                        checked={rentOptions[item._id] === 'daily'}
                                        onChange={() => handleRentOptionChange(item._id, 'daily')}
                                    />
                                    Daily: Rs. {item.dailyRent}/day
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input
                                        type="radio"
                                        name={`rentOption-${item._id}`}
                                        value="weekly"
                                        checked={rentOptions[item._id] === 'weekly'}
                                        onChange={() => handleRentOptionChange(item._id, 'weekly')}
                                    />
                                    Weekly: Rs. {item.weeklyRent}/week
                                </label>
                            </p>
                            <p>
                                Extend rental period by:
                                <select
                                    value={extensionOptions[item._id] || ''}
                                    onChange={(e) => handleExtensionChange(item._id, parseInt(e.target.value))}
                                >
                                    <option value="">Select days...</option>
                                    <option value="1">1 day</option>
                                    <option value="7">7 days</option>
                                    <option value="14">14 days</option>
                                    <option value="30">30 days</option>
                                </select>
                            </p>
                            <p>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={buyoutOptions[item._id] || false}
                                        onChange={(e) => handleBuyoutChange(item._id, e.target.checked)}
                                    />
                                    Buy Out: Rs. {item.buyoutPrice}
                                </label>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="bag-summary">
                <h3>Total: Rs. {getTotalAmount()}</h3>
                <button className="checkout-button">Proceed to Checkout</button>
            </div>
            <a href="/">Back to Home</a>
        </div>
    );
};

export default Bag;
