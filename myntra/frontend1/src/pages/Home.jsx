import React from 'react';
import Tabs from '../components/Tabs';
import Categories from '../components/Categories';
import MainImage from '../components/MainImage';

import Header from '../components/Header';
import NewestLaunches from '../components/NewestLaunches';
import './Home.css'; // Import Home-specific styles

const Home = () => {
    return (
        <div className="main-content">
            <Header />
            <Tabs />
            <Categories />
            <MainImage />
            <NewestLaunches />
        </div>
    );
};

export default Home;
