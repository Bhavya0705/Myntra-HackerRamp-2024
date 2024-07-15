import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo1.png'
import cart_icon from '../Assets/cart_icon.png'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
      <img src={logo} alt='' className="logo_img"/>
      </div>
      <div className="maintext">
        <p>Fashion Challenge</p>
      </div>
      <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt=''/>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar