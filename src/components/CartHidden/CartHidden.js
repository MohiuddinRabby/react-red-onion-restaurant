import React from "react";

/**
 * 
 * CartHidden to calculate product price and others
 * For now need to hidden
 * !!Needs to improve!!
 */
const CartHidden = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div className="container" style={{ display: "" }}>
      <div className="p-5">
        <h3>Item Ordered: {cart.length}</h3>
        <h4>Total: {total.toFixed(2)}</h4>
      </div>
    </div>
  );
};

export default CartHidden;
