import React from "react";
import { Cartcard } from "../components/Mycart/Cartcard";
import { useSelector } from "react-redux";
import { Card } from "../components/Home/Card";
export const Mycart = () => {
  const myCart = useSelector((state: any) => state.user.myCart);
  return (
    <>
      {myCart.map((product: any) => {
        return (
          <Cartcard productid={product.productid} quantity={product.quantity} />
        );
      })}
    </>
  );
};
