import React from 'react';
import './Footer.css';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { IoLogoApple } from 'react-icons/io5';
import { GrInstagram } from 'react-icons/gr';
import Icon2 from '../../assets/Icon2.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='top'>
        <div className='social'>
          <p>Design outstanding interfaces with advanced Figma features in a matter of minutes.</p>
          <div className='social-logo'>
            <FaFacebook />
            <FaGoogle />
            <IoLogoApple />
            <GrInstagram />
          </div>
        </div>
        
        <div className='column'>
            <h4>START A BUSINESS</h4>
            <p>Features</p>
            <p>Solutions</p>
            <p>Integrations</p>
            <p>Enterprise</p>
            <p>Solutions</p>
        </div>
        <div className='column'>
            <h4>GOVERNMENT REGISTRATION</h4>
            <p>Partners</p>
            <p>Community</p>
            <p>Developers</p>
            <p>App</p>
            <p>Blog</p>
        </div>
        <div className='column'>
            <h4>COMPLIANCE & TAX</h4>
            <p>Channels</p>
            <p>Scale</p>
            <p>Watch the Demo</p>
            <p>Our Competition</p>
        </div>
        <div className='column'>
            <h4>BIS & CDSCO</h4>
            <p>About Us</p>
            <p>News</p>
            <p>Leadership</p>
            <p>Media Kit</p>
        </div>

      </div>
      <div className='bottom'>
        <img src={Icon2} alt='Logo' className='footer-logo' />
        <p>© 2024 Registerkaro. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;