import React from "react";
import "./totalprice.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const Totalprice = () => {
  const myCart = useSelector((state: any) => state.user.myCart);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    let totalprice = 0;
    for (let i = 0; i < myCart.length; i++) {
      totalprice += myCart[i].price * myCart[i].quantity;
    }
    setPrice(totalprice);
  }, [myCart]);

  return (
    <>
      <div className="total-price">Totalprice:</div>
      <div className="price-tag">${price.toFixed(2)}</div>
      <button className="proceed-to-checkout-btn">Proceed to Checkout</button>
    </>
  );
};

export default Totalprice;
