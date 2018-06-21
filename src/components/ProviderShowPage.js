import React, { Component } from "react";
import Provider from "../requests/provider";
import ProviderDetails from "./ProviderDetails";

class ProviderShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      provider: null
    };
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
      </main>
    );
  }
}
export default ProviderShowPage;
