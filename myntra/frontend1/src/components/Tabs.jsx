import React, { useState } from 'react';
import './Tabs.css';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('Men');

    return (
        <div className="tabs">
            <button
                className={`tab ${activeTab === 'Men' ? 'active' : ''}`}
                onClick={() => setActiveTab('Men')}
            >
                Men
            </button>
            <button
                className={`tab ${activeTab === 'Women' ? 'active' : ''}`}
                onClick={() => setActiveTab('Women')}
            >
                Women
            </button>
        </div>
    );
};

export default Tabs;
