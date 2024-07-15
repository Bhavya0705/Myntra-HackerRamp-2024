import React from 'react'
import header_main from '../Assets/header_main (2).png' 
import './Header.css'
const Header = () => {
  return (
    <div className="hero">
        <img src={header_main} alt='' className='header_image'/>
    </div>
  )
}

export default Header