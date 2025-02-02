import React from 'react';
import './Home.css';
import Group3 from '../../assets/Group3.png';
import { MdOutlineStar } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
import Vector from '../../assets/vector.png';
import Svg from '../../assets/SVG.png';
import Svg1 from '../../assets/SVG1.png';
import Frame from '../../assets/Frame.png';
import Focus from '../../assets/Group4.png';

const HomePage = () => {
  return (
    <div className="home">
      <div className="home-left">
        <div className="rating-1">
          <div className="firstA">
            <MdOutlineStar className='first1'/>
          </div>
          <p>Global Rating</p>
          <div className="secondA">
            <IoStarSharp className="second1" />
            <IoStarSharp className="second1"/>
            <IoStarSharp className="second1"/>
            <IoStarSharp className="second1"/>
            <IoStarSharp className="second1"/>
          </div>
        </div>


        <div className="header">
          <h1 className='title'>
          Your trusted partner for compliance business needs
          </h1>
          <p className='subtitle'>An online business compliance platform that helps entrepreneurs and others with various
          <span className="highlight"> registrations, tax filings,</span> and other <span className="highlight">legal</span> matters.</p>
        </div>
        <div className="review">
          <div className="customer">
            <div className='logo'>
              <img src={Vector} alt="" />
              <img src={Vector} alt="" />
              <img src={Vector} alt="" />
              <img src={Vector} alt="" />
            </div>
            <div className="customer-rating">
              <h2>4.5+</h2>
              <p>Customer Rating</p>
            </div>
          </div>
          <div className="client">
            <img src={Svg} alt="" />
            <div className="review1">
              <h2>20, 000+</h2>
              <p>Clients</p>
            </div>
          </div>
          <div className="finance">
            <img src={Svg1} alt="" />
            <div className="review2">
              <h2>99.8%</h2>
              <p>Financial Stability</p>
            </div>
          </div>
        </div>
        <div className="test-1">
          <button className="expert-1">Talk An Expert
          </button>
          <div className='testPlay-1'>
            <div className='play-1'>
              <img src={Frame} alt="" />
            </div>
            <p>See how it works.</p>
          </div>
        </div>
      </div>


      <div className="home-right">
        <img src={Group3} alt="" />
        <div className="service-1">
          <button className="expert">Annual Compliance
          </button>
          <button className="expert">Payrol Services
          </button>
          <button className="expert">Company Formation
          </button>
          <button className="expert">Annual Compliance
          </button>
        </div>
        <img src={Focus} alt="focus" className='focus'/>
      </div>

    </div>
  );
};

export default HomePage;
