import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dish from "../requests/dish";

class DishIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dishes: []
    };
  }

  componentDidMount() {
    Dish.all().then(dishes => {
      this.setState({
        loading: false,
        dishes: dishes
      });
    });
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return (
        <main className="DishIndexPage">
          <h2>Loading...</h2>
        </main>
      );
    }
    return (
      <main className="DishIndexPage">
        <ul style={{ padding: 0, listStyle: "none" }}>
          {this.state.dishes.map(dish => (
            <li key={dish.id}>
              <Link to={`/dishes/${dish.id}`}>{dish.name}</Link>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default DishIndexPage;
