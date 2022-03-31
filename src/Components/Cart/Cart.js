import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  // Conditional rendering options
  // 1. Element Variable
  // 2. ternary operator condition ? true : false
  // 3. && operator (Shorthand)
  //   4. || operator
  let command;
  if (cart.length === 0) {
    command = (
      <div>
        <h5>Please Add at least One Item</h5>
      </div>
    );
  } else if (cart.length === 1) {
    command = <p>Please Add More...</p>;
  } else {
    command = (
      <p>
        <small>Thanks for Adding Item</small>
      </p>
    );
  }
  return (
    <div>
      <h2>Items Selected: {cart.length}</h2>
      {cart.map((tShirt) => (
        <p>
          {tShirt.name}
          <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
        </p>
      ))}
      {cart.length === 0 || <p className="orange">YAY!! You are buying</p>}
      {cart.length === 3 && (
        <div className="orange">
          <h3>Trigonal</h3> <p>For 3 Persons Gift</p>
        </div>
      )}
      {command}
      {cart.length !== 4 ? <p>Keep Adding</p> : <button>Remove All</button>}
      {cart.length === 4 && <button className="orange">Review Order</button>}
    </div>
  );
};

export default Cart;
