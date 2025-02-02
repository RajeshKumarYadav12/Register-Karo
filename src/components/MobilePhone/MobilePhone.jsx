import React from 'react'
import './MobilePhone.css';
import Frame1 from '../../assets/Frame 7844.png';
import Frame2 from '../../assets/Frame 7846.png';
import Screen from '../../assets/Screen.png';
import Screen1 from '../../assets/Screen1.png';

const MobilePhone = () => {
  return (
    <div className='mobilePhone'>
      <div className="phone-left">
        <div className="first">
          <h2>Manage Your Services by your Mobile Phone</h2>
        </div>
        <div className="second">
          <p>
          Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress. 
          </p>
        </div>
        <div className="third">
          <p>Get the App</p>
          <div className="app">
            <img src={Frame1} alt="" />
            <img src={Frame2} alt="" />
          </div>
        </div>
      </div>

      <div className="phone-right">
        <img src={Screen} alt="" />
        <img src={Screen1} alt="" />
      </div>
    </div>
  )
}

export default MobilePhone
