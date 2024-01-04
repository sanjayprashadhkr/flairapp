import React from "react";

import "./feautureproduct.css";
// import "../../styles/deals.css";
// import "../../styles.css";
import { useSelector } from "react-redux";
import { Card } from "../card/Card";

export const FeautureProduct = ({ id1, id2, id3, id4, category }: any) => {
  const productList = useSelector((state: any) => state.product.value);
  return (
    <div className="products-container">
      <h2 className="product-heading">{category}</h2>
      <div className="product-cards">
        {/* Just try to use one card component and manage it we dont have to use 4 card components*/}
        <Card
          clothimage={productList[id1].productImage}
          name={productList[id1].productName}
          productid={productList[id1].productId}
          price={productList[id1].price}
        />
        <Card
          clothimage={productList[id2].productImage}
          name={productList[id2].productName}
          productid={productList[id2].productId}
          price={productList[id2].price}
        />
        <Card
          clothimage={productList[id3].productImage}
          name={productList[id3].productName}
          productid={productList[id3].productId}
          price={productList[id3].price}
        />
        <Card
          clothimage={productList[id4].productImage}
          name={productList[id4].productName}
          productid={productList[id4].productId}
          price={productList[id4].price}
        />
      </div>
    </div>
  );
};
