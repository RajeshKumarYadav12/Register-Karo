import React from "react";
import "./HappyClient.css";

import Client from "../../assets/Pagination container.png";

import Vector7 from "../../assets/Vector7.png";
import Vector8 from "../../assets/Vector8.png";
import Vector9 from "../../assets/Vector9.png";
import Vector10 from "../../assets/Vector10.png";

const HappyClient = () => {
  return (
    <div className="happy-client">
      <div className="title-section">
        <h2>Our Happy Clients</h2>
        <p>
          Professionally cultivate one-to-one customer service with robust ideas.
          Dynamically innovate resource-leveling customer service for state-of-the-art
          customer service.
        </p>
      </div>

      <div className="client-image">
        <img src={Client} alt="Client logos" />
      </div>

      <div className="steps-section">
        <div className="step">
          <img src={Vector7} alt="Step 1" />
          <p>Fill up Application Form</p>
        </div>
        <div className="step">
          <img src={Vector8} alt="Step 2" />
          <p>Make Online Payment</p>
        </div>
        <div className="step">
          <img src={Vector9} alt="Step 3" />
          <p>Executive will Process Application</p>
        </div>
        <div className="step">
          <img src={Vector10} alt="Step 4" />
          <p>Get Confirm Mail</p>
        </div>
      </div>
    </div>
  );
};

export default HappyClient;
