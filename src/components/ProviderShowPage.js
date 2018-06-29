import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProviderDetails from "./ProviderDetails";
import DishList from "./DishList";
import DishForm from "./DishForm";
import Provider from "../requests/provider";
import Dish from "../requests/dish";
import Map from "./Map";

class ProviderShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      provider: null
    };
    this.providerId = this.props.match.params.id;
    this.deleteProvider = this.deleteProvider.bind(this);
    this.createDish = this.createDish.bind(this);
    this.deleteDish = this.deleteDish.bind(this);
  }

  componentDidMount() {
    const providerId = this.props.match.params.id;
    Provider.one(providerId).then(provider => {
      this.setState({
        provider: provider,
        loading: false
      });
    });
  }

  deleteProvider() {
    Provider.delete(this.providerId);
    this.setState({
      provider: null
    });

    this.props.history.push(`/providers`);
  }

  createDish(dishParams) {
    const { provider } = this.state;

    Dish.create(provider.id, dishParams).then(({ id }) => {
      window.location.reload();
      // this.setState({
      //   provider: {
      //     ...provider,
      //     dishes: [dishParams, ...provider.dishes]
      //   }
      // });
    });
  }

  deleteDish(id) {
    const { provider } = this.state;

    Dish.delete(id).then(({ id }) => {});
    this.setState({
      provider: {
        ...provider,
        dishes: provider.dishes.filter(a => a.id !== id)
      }
    });
  }

  render() {
    const { provider, loading } = this.state;
    if (loading) {
      return (
        <main className="ProviderShowPage">
          <h2>Loading...</h2>
        </main>
      );
    }

    return (
      <main className="ProviderShowPage">
        <ProviderDetails {...provider} />
        <button onClick={this.deleteProvider}>Delete</button>
        <button>
          <Link to={`/providers/update/${this.providerId}`}>Edit</Link>
        </button>
        <DishList
          dishes={provider.dishes}
          onDishDeleteClick={this.deleteDish}
        />
        <DishForm onSubmit={this.createDish} />
        <Map {...provider} />
      </main>
    );
  }
}
export default ProviderShowPage;
