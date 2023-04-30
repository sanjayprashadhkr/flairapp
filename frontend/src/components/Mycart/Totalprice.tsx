import React from "react";
import "./totalprice.css";

export const Totalprice = ({ price }: any) => {
  return (
    <>
      <div className="total-price">Totalprice</div>
      <div>{price}</div>
      <button>Proceed to Checkout</button>
    </>
  );
};

export default Totalprice;
