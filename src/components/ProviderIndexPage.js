import React, { Component } from "react";
import { Link } from "react-router-dom";
import Provider from "../requests/provider";

class ProviderIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      providers: []
    };

    this.deleteProvider = this.deleteProvider.bind(this);
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

  render() {
    const { loading } = this.state;

    if (loading) {
      return (
        <main className="ProviderShowPage">
          <h2>Loading...</h2>
        </main>
      );
    }
    return (
      <main className="ProviderIndexPage">
        <ul style={{ padding: 0, listStyle: "none" }}>
          {this.state.providers.map(provider => (
            <li key={provider.id}>
              <Link to={`/providers/${provider.id}`}>{provider.name}</Link>
              <br />
              <button data-id={provider.id} onClick={this.deleteProvider}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default ProviderIndexPage;
