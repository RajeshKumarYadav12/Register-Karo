import React from 'react';
import './QuestionAsked.css';
import LeftIcon from '../../assets/left.png';

const QuestionAsked = () => {
  return (
    <div className='questionAsk'>
      <div className="exactQuestion">
        <p>Can I recover deleted files from desktop with this software?</p>
        <img src={LeftIcon} alt="Toggle" />
      </div>
    </div>
  );
};

export default QuestionAsked;
