import React, { Component } from "react";
import User from "../requests/user";
import Session from "../requests/session";
const { Consumer, Provider } = React.createContext({});

export class Authenticator extends Component {
  constructor(props) {
    super(props);

    this.reload = this.reload.bind(this);
    this.signOut = this.signOut.bind(this);
    this.state = {
      loading: true,
      user: null,
      reload: this.reload,
      signOut: this.signOut
    };
  }

  signOut() {
    return Session.destroy().then(() => this.reload());
  }

  reload() {
    this.setState({ loading: true });

    return User.current().then(data => {
      console.log(data.id);
      if (data.status !== 401) {
        this.setState({ loading: false, user: data });
      } else {
        this.setState({ loading: false, user: null });
      }
    });
  }

  componentDidMount() {
    this.reload();
  }

  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}

export const Authenticate = Consumer;
