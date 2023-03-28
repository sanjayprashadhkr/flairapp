import React from "react";
import "./hero.css";

export const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-content">
        <div className="offer-text-container">
          <div style={{ fontSize: "48px" }}>
            Grab upto 50% Off on Selected Shirts
          </div>
          <button>Buy Now</button>
        </div>
      </div>
      <img
        src={
          "https://res.cloudinary.com/deuoakrwt/image/upload/v1678596863/shirtcollections_uckvec.jpg"
        }
        alt="Hero image"
      />
    </div>
  );
};
