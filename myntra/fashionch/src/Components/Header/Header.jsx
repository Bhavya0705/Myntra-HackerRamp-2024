import React from 'react'
import './Header.css'
import header_main from '../Assets/header_fc.png'
const Header = () => {
  return (
    <div className="hero">
        <img src={header_main} alt='' className='header_image'/>
    </div>
  )
}

export default Header