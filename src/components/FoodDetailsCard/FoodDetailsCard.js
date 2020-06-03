import React from "react";
import { Card, Button } from "react-bootstrap";
/**
 * FooDetailsCard to show food details card
 * gets data from 'FoodDetails' component
 *
 */
const FoodDetailsCard = (props) => {
  const {
    title,
    subtitle,
    description,
    img,
    catagories,
    price,
  } = props.findFoodDetails;
  return (
    <div className="container py-5 text-center">
      <Card>
        <Card.Body>
        <Card.Img src={img} style={{width:'200px'}}></Card.Img>
          <Card.Title className="display-5 text-secondary">{title}
          </Card.Title>
          {/* <Card.Text>{subtitle}</Card.Text> */}
          <Card.Text className="lead">{description}</Card.Text>
          <Card.Text>Type : {catagories}</Card.Text>
          <Button variant="outline-danger">Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FoodDetailsCard;
