import React, { Component } from "react";
import Dish from "../requests/dish";
import Map from "./Map";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";
import Review from "../requests/review";
import Like from "../requests/like";
import Favorite from "../requests/favorite";
import Progress from "./Progress";
import FavoriteIcon from "./icons/Favorite";
import TumbUp from "./icons/ThumbUp";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import { relative } from "path";
import { Tooltip } from "react-tippy";

class DishShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      dish: null,
      like: null,
      favoris: null
    };

    this.createReview = this.createReview.bind(this);
    this.deleteReview = this.deleteReview.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.providerBackClick = this.providerBackClick.bind(this);
  }

  componentDidMount() {
    const dishId = this.props.match.params.id;

    Dish.one(dishId).then(dish => {
      this.setState({
        dish: dish,
        loading: false,
        like: dish.likes_number,
        favoris: dish.favoris_number
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
      this.setState({
        like: dish.likes_number + 1
      });
    });
  }

  handleBackClick() {
    this.props.history.push(`/dishes/`);
  }

  providerBackClick(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const id = currentTarget.dataset.id;
    this.props.history.push(`/providers/${id}`);
  }

  handleFavoriteClick() {
    const { dish } = this.state;

    Favorite.create(dish.id).then(({ id }) => {
      this.setState({
        favoris: dish.favoris_number + 1
      });
    });
  }
  render() {
    const { dish, loading } = this.state;
    if (loading) {
      return (
        <main className="DishShowPage">
          <div class="centered">
            <Progress />
          </div>
        </main>
      );
    }

    return (
      <main className="DishShowPage">
        <Paper>
          <Tab onClick={this.handleBackClick} label="< BACK" />
        </Paper>
        <div class="container_div">
          <div style={{ padding: "5%" }}>
            <img src={dish.image_url} alt={dish.name} />
            <h2>
              {dish.name} - ${dish.price}
            </h2>
            <h3> {dish.description}</h3>
            <div class="center_div">
              <div onClick={this.handleClick}>
                <Tooltip title={dish.likers} position="top">
                  <TumbUp />
                </Tooltip>
              </div>
              <div> {this.state.like}</div>
              &nbsp; &nbsp;
              <div onClick={this.handleFavoriteClick}>
                <Tooltip title={dish.favoris} position="top">
                  <FavoriteIcon />
                </Tooltip>
              </div>
              <div>{this.state.favoris}</div>
            </div>
            <br />
            <ReviewForm onSubmit={this.createReview} />
            <ReviewList
              reviews={dish.reviews}
              onReviewDeleteClick={this.deleteReview}
            />
          </div>
          <div>
            <Paper style={{ padding: "5%" }}>
              <img src={dish.provider_image_url} alt={dish.name} />

              <h1>
                <Tooltip title="Check it out the menu" position="top">
                  <a
                    data-id={dish.provider.id}
                    onClick={this.providerBackClick}
                  >
                    {dish.provider.name}
                  </a>
                </Tooltip>
              </h1>
              <h2>{dish.provider.description}</h2>
              <h3>{dish.provider.phone_number}</h3>
              <h3>
                <a href="#">{dish.provider.website}</a>
              </h3>
              <h3>{dish.provider.address}</h3>
            </Paper>
            <br />
            <br />
            <br />

            <div style={{ borderRadius: "25px", padding: "5px" }}>
              <Map {...dish} style={{ hight: "100px", position: relative }} />
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default DishShowPage;
