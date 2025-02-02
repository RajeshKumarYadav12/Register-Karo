import React from "react";
import "./WhyChoose.css";

import WhyCard from "../WhyCards/WhyCard.jsx";
import Symbol1 from "../../assets/Symbol1.png";
import Symbol2 from "../../assets/Symbol2.png";
import Symbol3 from "../../assets/Symbol3.png";
import Symbol4 from "../../assets/Symbol4.png";

const WhyChoose = () => {
  return (
    <div className="why-container">
      <div className="why-left">
        <div className="why-left-first">
          <p className="why-heading">WHY  REGISTERKARO.IN</p>
          <h2 className="why-title">Why Choose Register Karo</h2>
          <p className="why-description">
            It is with consistent services and results that build trust with the people and that in turn help us to serve the business better.
          </p>
        </div>
        <div className="why-left-second">
          <WhyCard 
            imgSrc={Symbol1} 
            className="bg-color-1" 
            title="Guaranteed Satisfaction" 
            description="We ensure that you stay 100% satisfied with our offered services." 
          />
        </div>
      </div>

      <div className="why-right">
        <WhyCard 
          imgSrc={Symbol2} 
          className="bg-color-2" 
          title="Confidential & Safe" 
          description="All your private information is safe with us." 
        />
        <WhyCard 
          imgSrc={Symbol3} 
          className="bg-color-3" 
          title="No Hidden Fee" 
          description="Everything is put before you with no hidden charges or conditions." 
        />
        <WhyCard 
          imgSrc={Symbol4} 
          className="bg-color-4" 
          title="Expert CA/CS Assistance" 
          description="Prompt support from our in-house expert professionals" 
        />
        <WhyCard 
          imgSrc={Symbol2} 
          className="bg-color-5" 
          title="Confidential & Safe" 
          description="All your private information is safe with us." 
        />
      </div>
    </div>
  );
};

export default WhyChoose;
