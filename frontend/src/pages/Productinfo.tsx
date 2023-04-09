import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Sizecontainer } from "../components/Productinfo/Sizecontainer";
import { Description } from "../components/Productinfo/Description";
import { Price } from "../components/Productinfo/Price";
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

      <div>
        <div className="product-name">{currentProduct.productName}</div>
        <div className="size-container-parent">
          <div>Choose Size:</div>
          <Sizecontainer />
        </div>
        <Description description={currentProduct.productDescription} />
      </div>
      <Price />
    </div>
  );
};
