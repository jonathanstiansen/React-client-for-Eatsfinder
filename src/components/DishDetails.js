import React from "react";

function DishDetails(props) {
  return (
    <div className="DishDetails">
      <p>id: {props.id}</p>
      <p>Name: {props.name}</p>
      <p>Dish type: {props.dish_type}</p>
      <p>Description: {props.description}</p>
      <p>Price: {props.price}</p>
    </div>
  );
}

export default DishDetails;
