import React, { Component } from "react";
import ProviderForm from "./ProviderForm";
import Provider from "../requests/provider";

class ProviderUpdatePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      provider: null,
      loading: true
    };

    this.providerId = this.props.match.params.id;
    this.updateProvider = this.updateProvider.bind(this);
  }

  componentDidMount() {
    Provider.one(this.providerId).then(provider => {
      this.setState({
        provider: provider,
        loading: false
      });
    });
  }

  updateProvider(params) {
    Provider.update(this.providerId, params).then(({ id }) => {
      this.props.history.push(`/providers/${id}`);
    });
  }

  render() {
    const { provider, loading } = this.state;

    if (loading) {
      return (
        <main className="ProviderUpdatePage">
          <h2>Loading...</h2>
        </main>
      );
    }
    return (
      <main className="ProviderUpdatePage">
        <h2>Update Provider</h2>
        <ProviderForm {...provider} onSubmit={this.updateProvider} />
      </main>
    );
  }
}

export default ProviderUpdatePage;
