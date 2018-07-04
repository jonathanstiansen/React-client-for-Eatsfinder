import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dish from "../requests/dish";
import DishesMap from "./DishesMap";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Progress from "./Progress";
import SimpleMediaCard from "./SimpleMediaCard";

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
      this.setState({
        loading: false,
        dishes: dishes,
        value: 2
      });
    });
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleClick(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const data = currentTarget.dataset.id;
    Dish.all(data).then(dishes => {
      this.setState({
        loading: false,
        dishes: dishes
      });
    });
  }

  render() {
    const { loading } = this.state;
    const { user } = this.props.auth;
    if (loading) {
      return (
        <main className="DishIndexPage">
          <div class="centered">
            <Progress />
          </div>
        </main>
      );
    }
    return (
      <main className="DishIndexPage">
        <Paper>
          <Tabs
            value={this.state.value}
            indicatorColor="primary"
            textColor="primary"
            onChange={this.handleChange}
          >
            <Tab data-id={""} onClick={this.handleClick} label="All" />
            <Tab
              data-id={"?q[dish_type_eq]=breakfast"}
              onClick={this.handleClick}
              label="Breakfast"
            />
            <Tab
              data-id={"?q[dish_type_eq]=lunch"}
              onClick={this.handleClick}
              label="Lunch"
            />
            <Tab
              data-id={"?q[dish_type_eq]=brunch"}
              onClick={this.handleClick}
              label="Brunch"
            />
            <Tab
              data-id={"?q[dish_type_eq]=dinner"}
              onClick={this.handleClick}
              label="Dinner"
            />
            <Tab
              data-id={"?q[dish_type_eq]=dessert"}
              onClick={this.handleClick}
              label="Dessert"
            />
            <Tab
              data-id={"?q[dish_type_eq]=snack"}
              onClick={this.handleClick}
              label="Snack"
            />
            <Tab
              data-id={"?q[dish_type_eq]=drink"}
              onClick={this.handleClick}
              label="Drink"
            />
          </Tabs>
        </Paper>
        <div class="dishContainerMap">
          <DishesMap user={user} dishes={this.state.dishes} />
        </div>
        <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
          <div className="dishContainer">
            {this.state.dishes.map(dish => (
              <div>
                <li key={dish.id}>
                  <Link to={`/dishes/${dish.id}`}>
                    <SimpleMediaCard
                      name={dish.name}
                      price={dish.price}
                      url={dish.image_url}
                    />
                  </Link>
                </li>
              </div>
            ))}
          </div>
        </ul>
      </main>
    );
  }
}

export default DishIndexPage;
