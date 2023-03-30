import React from "react";

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
          "https://res.cloudinary.com/deuoakrwt/image/upload/v1678596863/shirtcollections_uckvec.jpg"
        }
        alt="Hero image"
      />
    </div>
  );
};
