import React from 'react'
import './Navbar2.css';
import Logo from '../../assets/logo1.png';
import { IoSearch } from "react-icons/io5";

const Navbar2 = () => {
  return (
    <div className="Navbar">
      <img src={Logo} alt="logoImage" className="logo" />
      <ul className="nav-links">
        <li>Home</li>
        <li>
          <select className="dropdown">
            <option value="Our Service">Our Services</option>
            <option value="Education">Education</option>
            <option value="Business">Business</option>
          </select>
        </li>
        <li>Blog</li>
        <li>Contact Us</li>
        <li>About Us</li>
        <li><IoSearch className="search-icon" /></li>
        <li><button className="expert-btn">Talk An Expert</button></li>
      </ul>
    </div>
  );
};

export default Navbar2;
