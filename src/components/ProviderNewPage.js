import React, { Component } from "react";
import ProviderForm from "./ProviderForm";
import Provider from "../requests/provider";
import Paper from "@material-ui/core/Paper";

class ProviderNewPage extends Component {
  constructor(props) {
    super(props);

    this.createProvider = this.createProvider.bind(this);
  }

  createProvider(params) {
    Provider.create(params).then(({ id }) => {
      this.props.history.push(`/providers/${id}`);
    });
  }

  render() {
    return (
      <main
        className="ProviderNewPage"
        style={{
          width: "700px",
          marginTop: "20px",
          marginLeft: "20%"
        }}
      >
        <ProviderForm onSubmit={this.createProvider} />
      </main>
    );
  }
}

export default ProviderNewPage;
