import React, { Component } from "react";
import UserForm from "./UserForm";
import User from "../requests/user";
import Session from "../requests/session";

class UserNewPage extends Component {
  constructor(props) {
    super(props);
    this.createUser = this.createUser.bind(this);
  }

  createUser(params) {
    User.create(params).then(({ id, email, password }) => {
      console.log("!!!!!!!", id);
      console.log(email);
      console.log(password);
      Session.create({
        email: email,
        password: password
      }).then(() => {
        this.props.history.push("/");
      });
    });
  }

  render() {
    return (
      <main className="UserNewPage">
        <h2>New User</h2>
        <UserForm onSubmit={this.createUser} />
      </main>
    );
  }
}

export default UserNewPage;
