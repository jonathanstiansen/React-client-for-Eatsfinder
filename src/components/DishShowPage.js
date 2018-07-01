import React, { Component } from "react";
import DishDetails from "./DishDetails";
import Dish from "../requests/dish";
import Map from "./Map";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";
import Review from "../requests/review";
import Like from "../requests/like";

class DishShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      dish: null
    };

    this.createReview = this.createReview.bind(this);
    this.deleteReview = this.deleteReview.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  createReview(reviewParams) {
    const { dish } = this.state;

    Review.create(dish.id, reviewParams).then(({ id }) => {
      this.setState({
        dish: {
          ...dish,
          reviews: [reviewParams, ...dish.reviews]
        }
      });
    });
  }

  deleteReview(id) {
    const { dish } = this.state;
    console.log(id);
    Review.delete(id).then(({ id }) => {});
    this.setState({
      dish: {
        ...dish,
        reviews: dish.reviews.filter(r => r.id !== id)
      }
    });
  }

  handleClick() {
    const { dish } = this.state;
    Like.create(dish.id).then(({ id }) => {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
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
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "unlike" : "like"}
        </button>
        <ReviewList
          reviews={dish.reviews}
          onReviewDeleteClick={this.deleteReview}
        />
        <ReviewForm onSubmit={this.createReview} />
        <Map {...dish} />
      </main>
    );
  }
}
export default DishShowPage;
