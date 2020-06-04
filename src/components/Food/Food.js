import React, { useState } from "react";
import "./Food.css";
import demoData from "../../demoData";
import FoodCategory from "../FoodCategory/FoodCategory";
/**
 * Food component to find foods according to category
 */
const Food = () => {
  const data = demoData;
  const [foods, setFoods] = useState(data);
  const [category, setCategory] = useState("lunch");
  const selectCategory = foods.filter((cat) => cat.catagories === category);
  /**
   * {selectCategory} to filter food accord to category from {category}
   */
  return (
    <div className="container food-header py-5">
        {/* nav {onClick} to select food cards accord to category */}
      <nav>
        <a onClick={() => setCategory("breakfast")}>Breakfast </a>
        <a onClick={() => setCategory("lunch")}>Lunch</a>
        <a onClick={() => setCategory("dinner")}>Dinner</a>
      </nav>
      <div className="container py-5">
        <div className="row">
          {selectCategory.map((item) => (
            <div className="col-md-4 py-3">
              {/* <FoodCategory/> food card design */}
              <FoodCategory items={item}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Food;
