import React from "react";
import "../styles/card.css";

const Card = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  return (
    <div className="card">
      <div className="img-box">
        <img src={img} alt="img" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p> {author} </p>
        <p> {price} $</p>
        <button onClick={() => handleClick(item)}>add to cart</button>
      </div>
    </div>
  );
};

export default Card;
