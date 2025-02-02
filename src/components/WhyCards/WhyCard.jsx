import React from "react";
import "./WhyCard.css";

const WhyCard = ({ imgSrc, title, description, className }) => {
  return (
    <div className={`why-card ${className}`}>
      <img src={imgSrc} alt={title} className="why-card-img" />
      <h3 className="why-card-title">{title}</h3>
      <p className="why-card-desc">{description}</p>
    </div>
  );
};

export default WhyCard;
