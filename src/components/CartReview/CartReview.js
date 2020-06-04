import React, { useEffect, useState } from "react";

const CartReview = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    //useEffect here to load data from local storage
  }, []);
  return (
    <div>
      <h1>cart revie4w</h1>
    </div>
  );
};

export default CartReview;
