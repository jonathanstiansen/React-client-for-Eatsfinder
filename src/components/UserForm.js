import React from "react";

function UserForm(props) {
  const { onSubmit = () => {} } = props;

  const handleSubmit = event => {
    event.preventDefault();
    const { currentTarget } = event;

    const formData = new FormData(currentTarget);

    onSubmit({
      user_name: formData.get("user_name"),
      full_name: formData.get("full_name"),
      email: formData.get("email"),
      password: formData.get("password"),
      password_confirmation: formData.get("password_confirmation")
    });

    currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="UserForm">
      <label htmlFor="user_name">User Name</label>
      <textarea
        cols="15"
        rows="1"
        name="user_name"
        defaultValue={props.user_name}
      />
      <br />
      <label htmlFor="full_name">Full Name </label>
      <textarea
        cols="15"
        rows="1"
        name="full_name"
        defaultValue={props.full_name}
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        cols="15"
        rows="1"
        name="email"
        type="email"
        defaultValue={props.email}
      />
      <br />
      <label htmlFor="password">password</label>
      <input
        cols="15"
        rows="1"
        type="password"
        name="password"
        defaultValue={props.password}
      />
      <br />
      <label htmlFor="password_confirmation">Password Confirmation</label>
      <input
        cols="15"
        rows="1"
        type="password"
        name="password_confirmation"
        defaultValue={props.password_confirmation}
      />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default UserForm;
