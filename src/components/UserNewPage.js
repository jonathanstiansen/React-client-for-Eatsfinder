import React, { Component } from "react";
import UserForm from "./UserForm";
import User from "../requests/user";

class UserNewPage extends Component {
  constructor(props) {
    super(props);

    this.createUser = this.createUser.bind(this);
  }

  createUser(params) {
    User.create(params).then(({ id }) => {
      console.log("!!!!!", id);
      this.props.history.push(`/welcome`);
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
