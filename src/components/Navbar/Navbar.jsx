import React from 'react';
import './Navbar.css';
import { MdEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div className='email'>
        <MdEmail />www.registerkaro.in
      </div>
      <div className='mobile'>
        <IoCallOutline /> +7631992314
      </div>
      <div className='socialA'>
        <BsInstagram />
        <IoLogoFacebook />
        <FaTwitter />
        <FaPinterestP />
      </div>
    </nav>
  )
}

export default Navbar
