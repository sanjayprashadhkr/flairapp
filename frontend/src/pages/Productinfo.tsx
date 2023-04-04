import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const Productinfo = () => {
  const { id } = useParams();
  const products = useSelector((state: any) => state.product);
  const productsArray = products.value;
  console.log(productsArray[Number(id) - 1]);
  console.log(productsArray[Number(id) - 1].productImage);
  return (
    <div>
      <div className="image-container productinfo-image-container">
        <img src={productsArray[Number(id) - 1].productImage} alt="cloth" />
      </div>

      <div>Product name</div>
      <div>Product price</div>
    </div>
  );
};
