import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateCart } from "../../reducers/user";

type propType = {
  cloth: string;
  name: string;
  productid: Number;
  price: Number;
};

export const Card = ({ cloth, name, productid, price }: propType) => {
  const user = useSelector((state: any) => state.user);
  const emailId = user.emailId;
  const dispatch = useDispatch();
  const myCart = user.myCart;
  const isProductAlreadyPresentInTheCart = (productid: any) => {
    for (let i = 0; i < myCart.length; i++) {
      if (myCart[i].productid === productid) {
        return true;
      }
    }
  };
  const additemtocart = async (price: any, productid: any, quantity: any) => {
    if (!isProductAlreadyPresentInTheCart(productid)) {
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
    <div className="card">
      <Link className="card-link" to={`/productinfo/${productid}`}>
        <div className="image-container">
          <img src={cloth} alt="cloth" className="productimage" />
        </div>
      </Link>
      <div className="product-description">
        <div className="name-container">{name}</div>
        <div className="price-container">
          <div>${String(price)}</div>
          {/* Adding a button that adds the item to the cart*/}
          <a
            className="add-to-cart"
            onClick={() => {
              additemtocart(price, productid, 1);
            }}
          >
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};
Card.defaultProps = {
  renderAsaLink: true,
};
