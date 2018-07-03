import React, { Component } from "react";
import { Link } from "react-router-dom";
import Provider from "../requests/provider";
import Progress from "./Progress";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

class ProviderIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      providers: []
    };

    this.deleteProvider = this.deleteProvider.bind(this);
    this.tabHandleClick = this.tabHandleClick.bind(this);
  }

  componentDidMount() {
    Provider.all().then(providers => {
      this.setState({
        loading: false,
        providers: providers
      });
    });
  }

  deleteProvider(event) {
    const { currentTarget } = event;
    const { providers } = this.state;
    const providerId = parseInt(currentTarget.dataset.id, 10);
    Provider.delete(providerId);
    this.setState({
      providers: providers.filter(p => p.id !== providerId)
    });
  }

  tabHandleClick(event) {
    const { history } = this.props;
    event.preventDefault();
    const { currentTarget } = event;
    const data = currentTarget.dataset.id;
    history.push(data);
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return (
        <main className="ProviderIdexPage">
          <div class="centered">
            <Progress />
          </div>
        </main>
      );
    }
    return (
      <main className="ProviderIndexPage">
        <Paper>
          <Tabs
            value={this.state.value}
            indicatorColor="primary"
            textColor="primary"
            onChange={this.handleChange}
          >
            <Tab
              data-id={"/providers/new"}
              onClick={this.tabHandleClick}
              label="New Food Provider"
            />
            <Tab
              data-id={"/dishes"}
              onClick={this.tabHandleClick}
              label="Eats"
            />
          </Tabs>
        </Paper>
        <ul class="providerIndexContainer">
          {this.state.providers.map(provider => (
            <li key={provider.id}>
              <div class="provider_center_div">
                <div>
                  <img
                    src={provider.image_url}
                    height={100}
                    alt={provider.name}
                  />
                </div>
                <div>
                  <Link to={`/providers/${provider.id}`}>{provider.name}</Link>
                </div>
                <div>
                  <p>
                    {provider.description}
                    <br />
                    {provider.phone_number}
                    <br />
                    {provider.website}
                    <br />
                    {provider.address}
                  </p>
                </div>
                <div>
                  <Button
                    data-id={provider.id}
                    color="prrimary"
                    variant="contained"
                  >
                    <Link to={`/providers/${provider.id}`}>Open</Link>
                  </Button>
                  &nbsp;
                  <Button
                    data-id={provider.id}
                    color="prrimary"
                    variant="contained"
                  >
                    <Link to={`/providers/update/${provider.id}`}>Edit</Link>
                  </Button>{" "}
                  <Button
                    data-id={provider.id}
                    color="prrimary"
                    variant="contained"
                    onClick={this.deleteProvider}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default ProviderIndexPage;
