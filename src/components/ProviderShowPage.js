import React, { Component } from "react";
import Provider from "../requests/provider";
import ProviderDetails from "./ProviderDetails";
import DishList from "./DishList";
import { Link } from "react-router-dom";
import DishForm from "./DishForm";

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

    this.setState({
      provider: {
        ...provider,
        dishes: [dishParams, ...provider.dishes]
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
        <DishList dishes={provider.dishes} />
        <DishForm onSubmit={this.createDish} />
      </main>
    );
  }
}
export default ProviderShowPage;
