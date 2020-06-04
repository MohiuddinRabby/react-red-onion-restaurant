import React, { useEffect, useState } from "react";
import { getDatabaseCart } from "../../utilities/databaseManager";
import demoData from "../../demoData";
import CartReviewItem from "../CartReviewItem/CartReviewItem";

const CartReview = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    //useEffect here to load data from local storage
    const getSavedDataFromLS = getDatabaseCart();
    const itemKeys= Object.keys(getSavedDataFromLS);
    //retrive ls data key and match with demoData key
    //find all matches and get data
    const cartProducts = itemKeys.map(key=>{
      const product= demoData.find(fd=>fd.keys===key);
      // console.log(product)
       product.quantity=getSavedDataFromLS[key]
      return product
    })
    setCart(cartProducts)
  },[]);
  return (
    <div>
      <h1>cart review{cart.length}</h1>
      {
        cart.map(pd=><CartReviewItem foodsToReview={pd}></CartReviewItem>)
      }
    </div>
  );
};

export default CartReview;
