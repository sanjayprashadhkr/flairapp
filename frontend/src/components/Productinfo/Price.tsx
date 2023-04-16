import React from "react";

export const Price = ({ price }: any) => {
  return (
    <div className="price-container-productinfo">
      <div>Price: 20$</div>
      <div className="qty-container">
        <button>-</button>
        <div>2</div>
        <button> +</button>
      </div>
      <button className="buy-now">Buy Now</button>
      <button className="addtocart">Add to Cart</button>
    </div>
  );
};
