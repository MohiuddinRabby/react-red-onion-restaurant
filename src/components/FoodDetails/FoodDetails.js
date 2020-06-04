import React, { useState } from "react";
import { useParams } from "react-router-dom";
import demoData from "../../demoData";
import FoodDetailsCard from "../FoodDetailsCard/FoodDetailsCard";
import CartHidden from "../CartHidden/CartHidden";
import { addToDatabaseCart } from "../../utilities/databaseManager";
/**
 * FoodDetails provides details of food
 * select food according food key or route param dynamically
 * comes from 'FoodCategory' component (/food/details/+title)
 * { title } = useParams()// provides data from App.js accord to route (/food/details/+title)
 */
const FoodDetails = () => {
  const { title } = useParams();
  const findFood = demoData.filter((find) => find.title === title);
  const [findFoodDetails, setFindFood] = useState(findFood);
  const [cart,setCart] = useState([]);
  /**
   * {findFood} finds data accord to {title} route param from demoData or database demo
   * !!Needs to improve!!
   */


/**
 * handleAddToCart = (foodItem) - to send clicked item to cart
 */
const handleAddToCart = (foodItem) => {
  const newCart = [...cart,foodItem];
  setCart(newCart);
  const sameProduct = newCart.filter(fd=>fd.id===foodItem.id);
  const count = sameProduct.length;
  addToDatabaseCart(foodItem.id,count);
 };
  return (
   <div>
      <div className="food-details-container float-left">
      {
        findFoodDetails.map((details) => (
          <FoodDetailsCard
            key={details.title}
            handleAddToCart={handleAddToCart}
            findFoodDetails={details}
          ></FoodDetailsCard>
        ))
        /**
         * findFoodDetails.map - to find all details of {findFood}
         * sends data to 'FoodDetailsCard' component
         */
      }
    </div>
    <div className="cart-hidden-container float-right">
        <CartHidden cart={cart}></CartHidden>
    </div>
   </div>
  );
};

export default FoodDetails;
