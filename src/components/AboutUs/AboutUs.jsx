import React from 'react';
import './AboutUs.css';
import Group7 from '../../assets/Group7.png';
import Group8 from '../../assets/Group8.png';
import AboutCard from '../AboutCards/AboutCard';
import Ellipse1 from'../../assets/Ellipse1.png';

import Ellipse2 from'../../assets/Ellipse 2.png';

const AboutUs = () => {
  return (
    <div className='about-us'>
      <div className="about-header">
        <h2>What people say about us</h2>
        <div className='navigation-icons'>
          <img src={Group7} alt="Previous" />
          <img src={Group8} alt="Next" />
        </div>
      </div>
      <hr className="divider" />
      <div className="about-cards">
        <AboutCard />
        <AboutCard />
        <AboutCard />
      </div>
      <div className="move">
        <div className="points">
          <img src={Ellipse1} alt="" />
          <img src={Ellipse2} alt="" />
          <img src={Ellipse2} alt="" />
          <img src={Ellipse2} alt="" />
          <img src={Ellipse2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
