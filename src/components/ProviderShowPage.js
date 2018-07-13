import React, { Component } from "react";
import { Link } from "react-router-dom";
import DishList from "./DishList";
import DishForm from "./DishForm";
import Provider from "../requests/provider";
import Dish from "../requests/dish";
import Map from "./Map";
import Button from "@material-ui/core/Button";
import Progress from "./Progress";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";

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
    this.tabHandleClick = this.tabHandleClick.bind(this);
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

  tabHandleClick(event) {
    this.props.history.push(`/providers`);
  }

  render() {
    const { provider, loading } = this.state;
    if (loading) {
      return (
        <main className="ProviderShowPage">
          <div class="centered">
            <Progress />
          </div>
        </main>
      );
    }

    return (
      <main className="ProviderShowPage">
        <Paper>
          <Tab onClick={this.tabHandleClick} label="< BACK" />
        </Paper>

        <div class="container_div">
          <div style={{ padding: "5%" }}>
            <DishList
              dishes={provider.dishes}
              onDishDeleteClick={this.deleteDish}
            />
            <DishForm onSubmit={this.createDish} />
          </div>
          <div>
            <Paper style={{ padding: "5%" }}>
              <img src={provider.image_url} alt={provider.name} />
              <h1>{provider.name}</h1>
              <h2>{provider.description}</h2>
              <h3>{provider.phone_number}</h3>
              <h3>{provider.website}</h3>
              <h3>{provider.address}</h3>
              <Button
                variant="contained"
                color="prrimary"
                onClick={this.deleteProvider}
              >
                Delete
              </Button>
              &nbsp;
              <Button variant="contained">
                <Link to={`/providers/update/${this.providerId}`}>Edit</Link>
              </Button>
            </Paper>
            <br />
            <br />
            <br />

            <div style={{ borderRadius: "25px", padding: "5px" }}>
              <Map {...provider} style={{ hight: "100px" }} />
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default ProviderShowPage;
