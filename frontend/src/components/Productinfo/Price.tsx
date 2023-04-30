import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../reducers/user";

export const Price = ({ price, productid }: any) => {
  const [quantity, setQuantity] = useState(1);
  const user = useSelector((state: any) => state.user);
  const emailId = user.emailId;
  const dispatch = useDispatch();
  const myCart = user.myCart;
  console.log("price" + price);
  const isProductAlreadyPresentInTheCart = () => {
    for (let i = 0; i < myCart.length; i++) {
      if (myCart[i].productid === productid) {
        return true;
      }
    }
  };
  const additemtocart = async () => {
    if (!isProductAlreadyPresentInTheCart()) {
      const res = await fetch(`http://localhost:4000/updatecart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailId: emailId,
          price: price,
          productid: productid,
          quantity: quantity,
        }),
      });
      dispatch(
        updateCart({
          productid: productid,
          quantity: quantity,
          price: price,
        })
      );
    }
  };
  return (
    <div className="price-container-productinfo">
      <div>Price: ${price}</div>
      <div className="qty-container">
        <button
          onClick={() => {
            if (quantity > 1) setQuantity(quantity - 1);
          }}
        >
          -
        </button>
        <div>{quantity}</div>
        <button
          onClick={() => {
            setQuantity(quantity + 1);
          }}
        >
          {" "}
          +
        </button>
      </div>
      <button className="buy-now">Buy Now</button>
      <button className="addtocart" onClick={additemtocart}>
        Add to Cart
      </button>
    </div>
  );
};
