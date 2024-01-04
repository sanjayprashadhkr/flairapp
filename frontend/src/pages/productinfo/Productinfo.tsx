import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Sizecontainer } from "../../components/Productinfo/Sizecontainer";
import { Description } from "../../components/Productinfo/Description";
import { Price } from "../../components/Productinfo/Price";
import "./productinfo.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState } from "react";

export const Productinfo = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const products = useSelector((state: any) => state.product);
  //get the info of the product from the product list in the from the redux store
  const productsArray = products.value;
  const currentProduct = productsArray[Number(id) - 1];
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 1000);
  }, []);

  return (
    <div className="productinfo-container">
      <div className="image-container productinfo-image-container">
        {<img src={currentProduct.productImage} alt="clothimage" />}
      </div>

      <div style={{ alignSelf: "normal" }}>
        <div className="product-name">{currentProduct.productName}</div>
        <div className="size-container-parent">
          {isLoading ? <div>Choose Size:</div> : <Skeleton width={250} />}

          <Sizecontainer />
        </div>
        <Description
          description={currentProduct.productDescription}
          isLoading={isLoading}
        />
      </div>
      <Price price={currentProduct.price} productid={Number(id)} />
    </div>
  );
};
