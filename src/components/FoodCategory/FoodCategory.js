import React from "react";
import { Card } from "react-bootstrap";
import './FoodCategory.css';
const FoodCategory = (props) => {
  const { title, subtitle, img, catagories, price } = props.items;
  return (
    <div className="food-cat-card">
      <Card>
        <Card.Body>
          <Card.Img variant="top w-50" src={img} />
          <Card.Title>{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
          <Card.Text>Type : {catagories}</Card.Text>
          <Card.Text>${price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FoodCategory;
