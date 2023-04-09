import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./productinfo.css";

export const Productinfo = () => {
  const { id } = useParams();
  const products = useSelector((state: any) => state.product);
  //get the info of the product from the product list in the from the redux store
  const productsArray = products.value;
  const currentProduct = productsArray[Number(id) - 1];
  return (
    <div className="productinfo-container">
      <div className="image-container productinfo-image-container">
        <img src={currentProduct.productImage} alt="cloth" />
      </div>

      <div className="product-name">{currentProduct.productName}</div>
      <div className="product-price">Product price section</div>
    </div>
  );
};
