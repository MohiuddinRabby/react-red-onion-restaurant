import React, { useEffect, useState } from "react";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import demoData from "../../demoData";
import CartReviewItem from "../CartReviewItem/CartReviewItem";
import CartHidden from "../CartHidden/CartHidden";
import { Form,Button } from "react-bootstrap";

const CartReview = () => {
  const [cart, setCart] = useState([]);
  const removeItem = (productKey) => {
    console.log("removed", productKey);
    const newRemoveCart = cart.filter((pd) => pd.keys !== productKey);
    setCart(newRemoveCart);
    removeFromDatabaseCart(productKey);
  };
  useEffect(() => {
    //useEffect here to load data from local storage
    const getSavedDataFromLS = getDatabaseCart();
    const itemKeys = Object.keys(getSavedDataFromLS);
    //retrive ls data key and match with demoData key
    //find all matches and get data
    const cartProducts = itemKeys.map((key) => {
      const product = demoData.find((fd) => fd.keys === key);
      // console.log(product)
      product.quantity = getSavedDataFromLS[key];
      return product;
    });
    setCart(cartProducts);
  }, []);
  return (
    <div className="container py-5">
      {/* <div className="float-left">
      {cart.map((pd) => (
        <CartReviewItem
          removeItem={removeItem}
          foodsToReview={pd}
        ></CartReviewItem>
      ))}
     </div>
     <div className="float-right">
       <CartHidden cart={cart}></CartHidden>
     </div> */}
      <div className="row">
        <div className="col-md-4">
          <Form>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="107 Road No,Dhaka" />
              <Form.Label>Phone</Form.Label>
              <Form.Control type="number" placeholder="088" />
              <Form.Label>Delivery Details</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button className="btn btn-danger" size="lg" block>Save & Continue</Button>
          </Form>
        </div>
        <div className="col-md-5">
          {
             <div>
               <div className="">
             {cart.map((pd) => (
               <CartReviewItem
                 removeItem={removeItem}
                 foodsToReview={pd}
               ></CartReviewItem>
             ))}
            </div>
             </div>
          }
        </div>
        <div className="col-md-3">
              <CartHidden cart={cart}></CartHidden>
            </div> 
      </div>
    </div>
  );
};

export default CartReview;
