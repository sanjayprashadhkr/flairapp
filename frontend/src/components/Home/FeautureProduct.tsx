import React from "react";
//Write a short form of the import statement below

// import "../../styles/deals.css";
// import "../../styles.css";
import "./productfeauture.css";

import { useSelector } from "react-redux";
import { Card } from "./Card";

export const FeautureProduct = ({ id1, id2, id3, id4, category }: any) => {
  const productList = useSelector((state: any) => state.product.value);
  return (
    <div className="products-container">
      <div className="product-heading">{category}</div>
      <div className="product-cards">
        <Card
          cloth={productList[id1].productImage}
          name={productList[id1].productName}
          productid={productList[id1].productId}
          price={productList[id1].price}
        />
        <Card
          cloth={productList[id2].productImage}
          name={productList[id2].productName}
          productid={productList[id2].productId}
          price={productList[id2].price}
        />
        <Card
          cloth={productList[id3].productImage}
          name={productList[id3].productName}
          productid={productList[id3].productId}
          price={productList[id3].price}
        />
        <Card
          cloth={productList[id4].productImage}
          name={productList[id4].productName}
          productid={productList[id4].productId}
          price={productList[id4].price}
        />
      </div>
    </div>
  );
};
