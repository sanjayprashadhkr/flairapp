import React from "react";
import { useParams } from "react-router-dom";

export const Productinfo = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Product Info:{id}</h1>
      <p>This is the product information page.</p>
    </div>
  );
};
