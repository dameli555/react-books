import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import "../styles/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };
  useEffect(() => {
    handlePrice();
  });
  return (
    <article>
      {cart?.map((item) => (
        <div className="cart-box" key={item.id}>
          <div className="cart-img">
            <img src={item.img} alt="img" />
            <p>{item.title}</p>
          </div>
          <div>
            <button
              className="butten-cart"
              onClick={() => handleChange(item, +1)}
            >
              +
            </button>
            <button
              className="butten-cart"
              onClick={() => handleChange(item, -1)}
            >
              -
            </button>
          </div>
          <div>
            <span>{item.price}</span>
            <button>{item.amount}</button>
            <button className="delete" onClick={() => handleRemove(item.id)}>
              delete
            </button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total:</span>
        <span> {price}$ </span>
      </div>
    </article>
  );
};

export default Cart;
