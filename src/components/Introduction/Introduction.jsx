import React from 'react';
import './Introduction.css';
import DisplayIcon from '../../assets/Display Icon.png';
import DisplayIcon1 from '../../assets/Display Icon1.png';
import youtube from '../../assets/youtube.png';

const Introduction = () => {
  return (
    <div className="Introduction">
      <div className="intro-left">
        <div className="into-title">
          <h2 className="title1">Our Video Introductions</h2>
          <p className="desc">
          Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna 
          vulputate pellentesque a diam tincidunt apis dui.
          </p>
        </div>

        <div className="icon-text1">
            <img src={DisplayIcon} alt="Explore Icon" className="icon" />
            <div className='explore1'>
              <h3>Explore ideas together</h3>
              <p>Engage audience segments and finally create actionable insights.<br />Amplify vertical integration.</p>
            </div>
        </div>

        <div className="icon-text2">
            <img src={DisplayIcon1} alt="Bring Ideas Icon" className="icon" />
            <div className='explore2'>
              <h3>Bring those ideas to life</h3>
              <p>Engage audience segments and finally create actionable insights.<br />Amplify vertical integration.</p>
            </div>
        </div>
      </div>

      <div className="intro-right">
          <img src={youtube} alt="Video Thumbnail" />
      </div>
    </div>
  );
};

export default Introduction;
