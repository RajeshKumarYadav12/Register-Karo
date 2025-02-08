import React, { useState } from "react";
import "./Navbar2.css";
import Logo from "../../assets/logo1.png";
import { IoSearch } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar2 = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to close sidebar
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="Navbar">
      <img src={Logo} alt="logoImage" className="logo" />

      {/* Desktop Navbar */}
      <ul className="nav-links desktop-nav">
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

      {/* Hamburger Icon (Visible only on small & medium devices) */}
      <div className="menu-icon" onClick={() => setSidebarOpen(true)}>
        <FaBars />
      </div>

      {/* Sidebar Menu (For Small & Medium Screens) */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        {/* Close Button */}
        <FaTimes className="close-icon" onClick={closeSidebar} />

        <ul className="nav-links">
          <li onClick={closeSidebar}>Home</li>
          <li onClick={closeSidebar}>
            <select className="dropdown">
              <option value="Our Service">Our Services</option>
              <option value="Education">Education</option>
              <option value="Business">Business</option>
            </select>
          </li>
          <li onClick={closeSidebar}>Blog</li>
          <li onClick={closeSidebar}>Contact Us</li>
          <li onClick={closeSidebar}>About Us</li>
          <li onClick={closeSidebar}><IoSearch className="search-icon" /></li>
          <li onClick={closeSidebar}>
            <button className="expert-btn">Talk An Expert</button>
          </li>
        </ul>
      </div>

      {/* Overlay to close sidebar when clicking outside */}
      {sidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}
    </div>
  );
};

export default Navbar2;
