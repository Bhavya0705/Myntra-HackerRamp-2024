import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/Logo (2).png'
import cart_icon from '../Assets/cart_icon.png' 
import { Link } from 'react-router-dom'
const Navbar = () => {

    const [menu,setMenu] = useState("Gallery")
  return (
    <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt='' className="logo_img"/>
        </div>
       <ul className="nav-menu">
        <li onClick={()=>{setMenu("Gallery")}}><Link style={{textDecoration :'none'}} to='/'>Gallery</Link>{menu==="Gallery"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration :'none'}} to='/Women'>Women</Link>{menu==="Women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Men")}}><Link style={{textDecoration :'none'}} to='/Men'>Men</Link>{menu==="Men"?<hr/>:<></>}</li>
        </ul> 
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt=''/>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar