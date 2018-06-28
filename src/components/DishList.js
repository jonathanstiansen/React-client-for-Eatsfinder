import React from "react";
import DishDetails from "./DishDetails";

function DishList(props) {
  const { dishes = [], onDishDeleteClick = () => {} } = props;

  return (
    <ul>
      {dishes.map(dish => (
        <li key={dish.id}>
          <DishDetails {...dish} onDeleteClick={onDishDeleteClick} />
        </li>
      ))}
    </ul>
  );
}

export default DishList;
