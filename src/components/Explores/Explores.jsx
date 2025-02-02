import React from 'react';
import './Explores.css';
import Card from '../Cards/Card.jsx';

import Vector1 from '../../assets/vector1.png';
import Vector2 from '../../assets/vector2.png';
import Vector3 from '../../assets/vector3.png';
import Vector4 from '../../assets/vector4.png';
import Vector5 from '../../assets/vector5.png';
import Vector6 from '../../assets/vector6.png';

const cardData = [
  { title: "Company Formation", desc: "Build web-based solutions that enhance customer experience.", image: Vector1 },

  { title: "Company Secretarial Services", desc: "Make data-driven decisions and utilize technology to reach business goals.", image: Vector2 },

  { title: "Virtual Office Address", desc: "Foster customer relationships by effectively serving your market.", image: Vector3 },

  { title: "Annual Compliance Services", desc: "Turn your ideas into modern products with our design experts.", image: Vector4 },

  { title: "Payroll Services", desc: "Expand your business across the globe with minimal effort.", image: Vector5 },

  { title: "Bookkeeping Services", desc: "Steering user behaviors with creative design, data insights & technology.", image: Vector6 }
];

const Explores = () => {
  return (
    <div className='explore'>
      <div className="first-explore">
        <p>WELCOME TO REGISTERKARO.IN</p>
        <h2>Explore Our Services</h2>
      </div>
      <div className="cards">
        {cardData.map((item, index) => (
          <Card key={index} title={item.title} desc={item.desc} image={item.image} />
        ))}
      </div>
      
      <button className='btn'>See All Services
      </button>
    </div>
  );
}

export default Explores;
