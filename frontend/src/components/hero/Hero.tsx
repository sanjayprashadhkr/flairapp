import React from "react";
import "./hero.css";

export const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-content">
        <div className="offer-text-container">
          <div className="offer-text">Grab upto 50% Off on Selected Shirts</div>
          <button>Buy Now</button>
        </div>
      </div>
      <img
        src={
          "https://res.cloudinary.com/deuoakrwt/image/upload/v1703679211/zeoptjyerciirbf491g9.jpg"
        }
        alt="Hero image"
      />
    </div>
  );
};
