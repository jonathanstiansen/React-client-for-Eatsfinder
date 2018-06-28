import React, { Component } from "react";
import ProviderForm from "./ProviderForm";
import Provider from "../requests/provider";

class ProviderNewPage extends Component {
  constructor(props) {
    super(props);

    this.createProvider = this.createProvider.bind(this);
  }
  createProvider(params) {
    console.log(params);
    Provider.create(params).then(({ id }) => {
      this.props.history.push(`/providers/${id}`);
    });
  }

  render() {
    return (
      <main className="ProviderNewPage">
        <h2>New Provider</h2>
        <ProviderForm onSubmit={this.createProvider} />
      </main>
    );
  }
}

export default ProviderNewPage;
