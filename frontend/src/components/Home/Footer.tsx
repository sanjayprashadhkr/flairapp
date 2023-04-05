import React from "react";
import "./footer.css";
export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-box">
        <div>
          <div className="list-heading">About</div>
          <ul className="list-item">
            <a href="#">Contact Us</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Corporate Information</a>
          </ul>
        </div>
        <div>
          <div className="list-heading">Help</div>
          <ul className="list-item">
            <a href="#">Payments</a>
            <a href="#">Shipping</a>
            <a href="#">Cancellation & Returns</a>
            <a href="#">FAQ</a>
          </ul>
        </div>
        <div>
          <div className="list-heading">Policy</div>
          <div>
            <ul className="list-item">
              <a href="#">Return Policy</a>
              <a href="#">Terms Of Use</a>
              <a href="#">Security</a>
              <a href="#">Privacy</a>
            </ul>
          </div>
        </div>
        <div className="social">
          <div className="list-heading">Social</div>
          <ul className="list-item">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Youtube</a>
            <a href="#">Instagram</a>
          </ul>
        </div>
      </div>
    </div>
  );
};
