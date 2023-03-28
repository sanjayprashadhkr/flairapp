import React from "react";
// import "../../styles.css";
import "./card.css";
// import { type } from "os";
import { Link } from "react-router-dom";

type propType = {
  cloth: string;
  name: string;
  productid: Number;
  price: Number;
};

export const Card = ({ cloth, name, productid, price }: propType) => {
  return (
    <div className="card">
      <Link className="card-link" to={`/productdetails/${productid}`}>
        <div className="image-container">
          <img src={cloth} alt="cloth" className="productimage" />
        </div>
      </Link>
      <div className="product-description">
        <div className="name-container">{name}</div>
        <div className="price-container">
          <div>${String(price)}</div>
          {/* Adding a button that adds the item to the cart*/}
          <a className="add-to-cart">Add to Cart</a>
        </div>
      </div>
    </div>
  );
};
Card.defaultProps = {
  renderAsaLink: true,
};
