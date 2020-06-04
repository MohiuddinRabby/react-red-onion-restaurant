import React from "react";

const CartReviewItem = (props) => {
  const { title, quantity } = props.foodsToReview;
  return (
    <div>
      <h1>{title}</h1>
      <p>{quantity}</p>
    </div>
  );
};

export default CartReviewItem;
