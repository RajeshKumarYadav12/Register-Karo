import React from 'react'
import './CompanyTag.css';
import CompanyLogo from '../../assets/CompanyLogos.png';


const CompanyTag = () => {
  return (
    <div className='Logo'>
      <p>Trusted By Over 100+ Startups and freelance business</p>
      <img src={CompanyLogo} alt="logo" />
    </div>
  )
}

export default CompanyTag;
