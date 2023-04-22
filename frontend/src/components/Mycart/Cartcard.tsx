import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./cartcard.css";

export const Cartcard = ({ productid, quantity }: any) => {
  const productsList = useSelector((state: any) => state.product.value);
  const [quantitytemp, setQuantity] = useState(quantity);
  let currentProduct;
  for (let i = 0; i < productsList.length; i++) {
    if (productid === productsList[i].productId) {
      currentProduct = productsList[i];
      console.log(currentProduct);
      break;
    }
  }
  return (
    <div className="card-container">
      <img src={currentProduct.productImage} />
      <div>
        <div>{currentProduct.productName}</div>
        <div>{currentProduct.price}</div>
        <div className="qty-container">
          <button
            onClick={() => {
              if (quantity > 1) setQuantity(quantitytemp - 1);
            }}
          >
            -
          </button>
          <div>{quantitytemp}</div>
          <button
            onClick={() => {
              setQuantity(quantitytemp + 1);
            }}
          >
            {" "}
            +
          </button>
        </div>
      </div>
    </div>
  );
};
