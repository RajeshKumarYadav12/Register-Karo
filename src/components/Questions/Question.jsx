import React from 'react';
import './Question.css';
import QuestionAsked from '../QuestionAsked/QuestionAsked';
import ArrowIcon from '../../assets/Icon1.png';

const Question = () => {
  return (
    <div className='FAQ'>
      <div className="question">
        <p>FAQ</p>
        <h2>Frequent Ask Questions</h2>
      </div>
      <div className="AllQuestion">
        <QuestionAsked />
        <QuestionAsked />
        <QuestionAsked />
        <QuestionAsked />
        <QuestionAsked />
      </div>
      <div className="btn3">
      <button className="show-more">Show more <img src={ArrowIcon} alt="Arrow Icon" className="arrow-icon" /> </button>
      </div>
    </div>
  );
};

export default Question;
