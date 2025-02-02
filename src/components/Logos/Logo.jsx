import React from 'react'
import './Logo.css';
import Logos from '../../assets/Logos.png';

const Logo = () => {
  return (
    <div className='header-logo'>
      <img src={Logos} alt="" />
    </div>
  )
}

export default Logo
