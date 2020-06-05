import React from "react";
import { Button, Card } from "react-bootstrap";
import "./CartReviewItem.css";
const CartReviewItem = (props) => {
  const { title, quantity, keys, img } = props.foodsToReview;
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-4 crd">
          <img src={img} alt="" />
        </div>
        <div className="col-md-8">
          <h5>
            {title}&nbsp;&nbsp; <br/> Quantity : {quantity}
          </h5>
        </div>
      </div>
      <hr/>
    </div>
  );
};
{
  /* <Button size="sm" onClick={() => props.removeItem(keys)} variant="danger">Remove Item</Button> */
}

export default CartReviewItem;
