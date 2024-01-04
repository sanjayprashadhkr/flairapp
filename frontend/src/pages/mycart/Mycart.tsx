import React from "react";
import { Cartcard } from "../../components/Mycart/Cartcard";
import { useSelector } from "react-redux";
import { Card } from "../../components/card/Card";
import { Totalprice } from "../../components/Mycart/Totalprice";
import { useState } from "react";
import "./mycart.css";

export const Mycart = () => {
  const myCart = useSelector((state: any) => state.user.myCart);
  const [price, setPrice] = useState(0);
  const [detectChange, setDetectChange] = useState(0);
  return (
    <div className="mycart-container">
      <div>
        {myCart.map((product: any) => {
          return (
            <Cartcard
              productid={product.productid}
              quantity={product.quantity}
            />
          );
        })}
      </div>
      <div>
        <Totalprice />
      </div>
    </div>
  );
};
