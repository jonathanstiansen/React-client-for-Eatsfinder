import React, { Component } from "react";
import Session from "../requests/session";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "email", passwordValue: "password" };

    this.signIn = this.signIn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.passwordHandleChange = this.passwordHandleChange.bind(this);
  }

  signIn(event) {
    event.preventDefault();
    const { history, auth } = this.props;
    const formData = new FormData(event.currentTarget);

    Session.create({
      email: formData.get("email"),
      password: formData.get("password")
    })
      .then(() => auth.reload())
      .then(() => {
        history.push("/dishes");
      });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  passwordHandleChange(event) {
    this.setState({ passwordValue: event.target.value });
  }

  render() {
    return (
      <main
        className="SignInPage"
        style={{
          width: "40%",
          marginTop: "10%",
          marginLeft: "30%"
        }}
      >
        <Paper
          style={{
            padding: "50px"
          }}
        >
          <form
            style={{ width: "400px", padding: "20px" }}
            onSubmit={this.signIn}
          >
            <h1>Sign in to your account</h1>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>

            <div>
              <input
                id="password"
                name="password"
                type="password"
                value={this.state.passwordValue}
                onChange={this.passwordHandleChange}
              />
            </div>
            <br />
            <br />

            <Button color="primary" variant="contained" type="submit">
              Sign IN
            </Button>
            <Button color="primary" type="submit">
              Sign UP
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default SignInPage;
