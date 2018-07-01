import React from "react";

function DishDetails(props) {
  const { onDeleteClick = () => {} } = props;

  return (
    <div className="DishDetails">
      <p>Name: {props.name}</p>
      <p>likes :{props.likes_number}</p>
      <p>Dish type: {props.dish_type}</p>
      <p>Description: {props.description}</p>
      <p>Price: {props.price}</p>
      <img src={props.image_url} alt={props.name} />
      <button onClick={() => onDeleteClick(props.id)}>Delete</button>
    </div>
  );
}

export default DishDetails;
