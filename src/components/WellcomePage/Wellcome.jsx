import React from 'react'
import './Wellcome.css';
import Symbol from '../../assets/Symbol.png';
import Group5 from '../../assets/Group5.png';

const Wellcome = () => {
  return (
    <div className='wellcome'>
      <div className="desc">
        <p className='title'>WELCOME TO REGISTERKARO.IN</p>
        <h2>About <span>Register Karo</span></h2>
        <div className="about">
         <p>We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I’m extremely pleased with
         their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about
         customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone’s expectations. 
         </p>
         <p>I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.</p>
        </div>
        <button className="btn">
          <p>Learn More</p>
          <img src={Symbol} alt="image" className='btnImage'/>
        </button>
      </div>
      <div className="image">
        <img src={Group5} alt="image" />
      </div>
    </div>
  )
}

export default Wellcome
