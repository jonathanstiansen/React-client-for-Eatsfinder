import React from "react";

function DishTypeLinks(props) {
  return (
    <div className="DishTypeLinks">
      <a data-id={""} onClick={this.handleClick}>
        All
      </a>
      <a data-id={"?q[dish_type_eq]=breackfast"} onClick={this.handleClick}>
        Breackfast
      </a>
      <a data-id={"?q[dish_type_eq]=lunch"} onClick={this.handleClick}>
        Lunch
      </a>
      <a data-id={"?q[dish_type_eq]=brunch"} onClick={this.handleClick}>
        Brunch
      </a>
      <a data-id={"?q[dish_type_eq]=dinner"} onClick={this.handleClick}>
        Dinner
      </a>
      <a data-id={"?q[dish_type_eq]=dessert"} onClick={this.handleClick}>
        Dessert
      </a>
      <a data-id={"?q[dish_type_eq]=snack"} onClick={this.handleClick}>
        Snack
      </a>
      <a data-id={"?q[dish_type_eq]=drink"} onClick={this.handleClick}>
        Drink
      </a>
    </div>
  );
}

export default DishTypeLinks;
