import React, { Component } from "react";
import { Link } from "react-router-dom";

class DishFavoritePage extends Component {
  render() {
    const { user } = this.props.auth;

    return (
      <main className="DishFavoritePage">
        <ul style={{ padding: 0, listStyle: "none" }}>
          {user.favorite_dishes.map(dish => (
            <li key={dish.id}>
              <Link to={`/dishes/${dish.id}`}>{dish.name}</Link>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default DishFavoritePage;
