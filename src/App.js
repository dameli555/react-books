import React, { useState } from "react";
import Navbar from "./components/navbar";
import Main from "./components/main";
import Cart from "./components/cart";
import "./styles/main.css";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
    }

    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });

    const tempArr = cart;
    tempArr[ind].amount += d;
    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };
  return (
    <React.Fragment>
      <Navbar size={cart.length} setShow={setShow} />
      {show ? (
        <Main handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}

      {warning && <div className="warning"> item already added to cart</div>}
    </React.Fragment>
  );
}

export default App;
