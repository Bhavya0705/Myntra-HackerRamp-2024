import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import Footer from './components/Footer';
import BehindTheSeams from './pages/BehindTheSeams';
import StyleSquare from './pages/StyleSquare';
import Rentals from './pages/Rentals';
import Bag from './pages/Bag';
import AllDesigners from './pages/AllDesigners';
import ProductDetail from './components/ProductDetail';
import Designer7Details from './pages/Designer7Details';
import Home from './pages/Home'; // Import the new Home component
import { FaBell, FaHeart, FaUser } from 'react-icons/fa'; // Import the required icons
import './App.css'; // Import CSS for styles

const App = () => {
    return (
        <Router>
            <div className="App">
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/trendsetters" element={<Home />} />
                    <Route path="/behind-the-seams" element={<BehindTheSeams />} />
                    <Route path="/style-square" element={<StyleSquare />} /> 
                    <Route path="/bag" element={<Bag />} /> 
                    <Route path="/rentals" element={<Rentals />} /> 
                    <Route path="/product/3" element={<ProductDetail />} />
                    <Route path="/all-designers" element={<AllDesigners />} />
                    <Route path="/designer7-details" element={<Designer7Details />} />
                    <Route path="*" element={<div>404 Not Found</div>} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
