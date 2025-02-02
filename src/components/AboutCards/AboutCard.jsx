import React from 'react';
import './AboutCard.css';
import Img from '../../assets/img.png';
import Star1 from '../../assets/Star1.png';
import Star2 from '../../assets/Star2.png';
import DivImage from '../../assets/div.lazyloaded.png';

const AboutCard = () => {
  return (
    <div className='about-card'>
      <div className="card-top">
        <img src={Img} alt="Profile" className="profile-img" />
        <div className='rating'>
          <img src={Star1} alt="Star" />
          <img src={Star1} alt="Star" />
          <img src={Star1} alt="Star" />
          <img src={Star1} alt="Star" />
          <img src={Star2} alt="Half Star" className='Half' />
        </div>
      </div>
      <div className="card-middle">
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Aute irure sint amet occaecat cupidatat non proident.
        </p>
      </div>
      <div className="card-bottom">
        <img src={DivImage} alt="User" className="user-img" />
        <div className="about-user">
          <p className="user-name">Chris</p>
          <p className="user-role">President and CEO, PrintReach, USA</p>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
