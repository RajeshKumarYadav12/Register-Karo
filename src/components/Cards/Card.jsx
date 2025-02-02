import React from 'react';
import './Card.css';
import Symbol from '../../assets/Symbol.png';

const Card = ({ title, desc, image }) => {
  return (
    <div className='card'>
      <img src={image} alt="service-icon" className='vector1' />
      <p className="title">{title}</p>
      <p className="desc">{desc}</p>
      <div className="more">
        <p>Learn more</p>
        <img src={Symbol} alt="symbol" />
      </div>
    </div>
  );
}

export default Card;
