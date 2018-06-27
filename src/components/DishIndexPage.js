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
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    Dish.all().then(dishes => {
      console.log(this.props);
      this.setState({
        loading: false,
        dishes: dishes
      });
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const data = currentTarget.dataset.id;
    console.log(data);
    Dish.all(data).then(dishes => {
      this.setState({
        loading: false,
        dishes: dishes
      });
    });
  }

  // handleClick(e) {
  //   const { dishes } = this.state;
  //   e.preventDefault();
  //   this.props.history.push("dishes?filer_by=name");
  //   this.setState({
  //     dishes: dishes.filter(d => d.dish_type !== "Drink")
  //   });
  // }

  // handleClick() {
  //   const { dishes } = this.state;
  //   this.setState(prevState => ({
  //     isToggleOn: !prevState.isToggleOn,
  //     dishes: dishes.filter(d => d.dish_type == "Drink")
  //   }));
  // }

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
