import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { removeCartItem } from "../../reducers/user";
import { useDispatch } from "react-redux";
import { updateCartQuantity } from "../../reducers/user";
import "./cartcard.css";

export const Cartcard = ({ productid, quantity }: any) => {
  const productsList = useSelector((state: any) => state.product.value);
  const user = useSelector((state: any) => state.user);
  const [quantitytemp, setQuantity] = useState(quantity);
  const dispatch = useDispatch();
  let currentProduct;
  for (let i = 0; i < productsList.length; i++) {
    if (productid === productsList[i].productId) {
      currentProduct = productsList[i];
      break;
    }
  }

  const deleteitem = async () => {
    dispatch(removeCartItem({ productid: productid }));
    // const response = await fetch(
    //   "https://backend.sanjaykr.dev/deletecartitem",
    //   {
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       emailId: user.emailId,
    //       productid: productid,
    //     }),
    //   }
    // ).then(() => {
    //   console.log("THEN IS CALLED");

    // });
  };

  return (
    <div className="card-container">
      <img src={currentProduct.productImage} />
      <div className="cart-details-container">
        <div className="cartcard-product-name">
          {currentProduct.productName}
        </div>
        <div className="cart-details-seconday-container">
          <div className="cartcard-product-price">
            ${(currentProduct.price * quantitytemp).toFixed(2)}
          </div>
          <div className="qty-container">
            <button
              onClick={() => {
                if (quantitytemp > 1) setQuantity(quantitytemp - 1);
                dispatch(
                  updateCartQuantity({
                    productid: productid,
                    quantity: quantitytemp - 1,
                  })
                );
              }}
            >
              -
            </button>
            <div>{quantitytemp}</div>
            <button
              onClick={() => {
                setQuantity(quantitytemp + 1);
                dispatch(
                  updateCartQuantity({
                    productid: productid,
                    quantity: quantitytemp + 1,
                  })
                );
              }}
            >
              {" "}
              +
            </button>
          </div>
        </div>
        <button onClick={deleteitem} className="remove-button">
          Remove
        </button>
      </div>
    </div>
  );
};
