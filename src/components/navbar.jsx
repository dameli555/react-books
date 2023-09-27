import React from "react";
import "../styles/navbar.css";

const Navbar = ({ size, setShow }) => {
  return (
    <nav>
      <div className="nav-box">
        <h2 className="logo" onClick={() => setShow(true)}>
          {" "}
          Books{" "}
        </h2>
        <div className="cart">
          <img
            src="/img/shopping-cart.svg"
            alt="cart"
            onClick={() => setShow(false)}
          />
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
