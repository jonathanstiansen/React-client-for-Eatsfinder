import React, { Component } from "react";
import Session from "../requests/session";

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
  }

  signIn(event) {
    event.preventDefault();
    const { history } = this.props;
    const formData = new FormData(event.currentTarget);

    Session.create({
      email: formData.get("email"),
      password: formData.get("password")
    }).then(() => {
      history.push("/");
    });
  }

  render() {
    return (
      <main className="SignInPage">
        <form onSubmit={this.signIn}>
          <div>
            <label htmlFor="email">Email</label> <br />
            <input id="email" name="email" type="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label> <br />
            <input id="password" name="password" type="password" />
          </div>

          <input type="submit" value="Sign in" />
        </form>
      </main>
    );
  }
}

export default SignInPage;
