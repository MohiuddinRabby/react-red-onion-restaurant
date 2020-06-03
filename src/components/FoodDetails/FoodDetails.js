import React, { useState } from "react";
import { useParams } from "react-router-dom";
import demoData from "../../demoData";
import FoodDetailsCard from "../FoodDetailsCard/FoodDetailsCard";
/**
 * FoodDetails provides details of food
 * select food according food key or route param dynamically
 * comes from 'FoodCategory' component (/food/details/+title)
 * { title } = useParams()// provides data from App.js accord to route (/food/details/+title)
 */
const FoodDetails = () => {
  const { title } = useParams();
  const findFood = demoData.filter((find) => find.title === title);
  const [findFoodDetails,setFindFood] = useState(findFood)
  /**
   * {findFood} finds data accord to {title} route param from demoData or database demo
   * !!Needs to improve!!
   */
  return (
    <div>
      {
        findFoodDetails.map(details=><FoodDetailsCard findFoodDetails={details}></FoodDetailsCard>)
        /**
         * findFoodDetails.map - to find all details of {findFood} 
         * sends data to 'FoodDetailsCard' component
         */
      }
    </div>
  );
};

export default FoodDetails;
