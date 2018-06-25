import React, { Component } from "react";
import DishDetails from "./DishDetails";
import Dish from "../requests/dish";

class DishShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      dish: null
    };
  }

  componentDidMount() {
    const dishId = this.props.match.params.id;

    Dish.one(dishId).then(dish => {
      this.setState({
        dish: dish,
        loading: false
      });
    });
  }

  render() {
    const { dish, loading } = this.state;

    if (loading) {
      return (
        <main className="DishShowPage">
          <h2>Loading...</h2>
        </main>
      );
    }

    return (
      <main className="DishShowPage">
        <DishDetails {...dish} />
      </main>
    );
  }
}
export default DishShowPage;
