import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

function ProviderForm(props) {
  const { onSubmit = () => {} } = props;

  const handleSubmit = event => {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);
    onSubmit(formData);
    currentTarget.reset();
  };

  return (
    <Paper
      style={{
        padding: "50px"
      }}
    >
      <h1>New Food Provider</h1>

      <form onSubmit={handleSubmit} className="ProviderForm">
        <table class="newProvierForm">
          <tr>
            <th>
              <label htmlFor="name">Name</label>
            </th>
            <th>
              <textarea
                cols="15"
                rows="1"
                name="name"
                defaultValue={props.name}
              />
            </th>
          </tr>
          <tr>
            <th>
              <label htmlFor="description">Description</label>
            </th>
            <th>
              <textarea
                cols="15"
                rows="1"
                name="description"
                defaultValue={props.description}
              />
            </th>
          </tr>
          <tr>
            <th>
              <label htmlFor="email">Email</label>
            </th>
            <th>
              <input
                cols="15"
                rows="1"
                type="email"
                name="email"
                defaultValue={props.email}
              />
            </th>
          </tr>
          <tr>
            <th>
              <label htmlFor="phone_number" style={{ padding: "3%" }}>
                Phone Number
              </label>
            </th>
            <th>
              <input
                cols="15"
                rows="1"
                type="tel"
                name="phone_number"
                defaultValue={props.phone_number}
              />
            </th>
          </tr>
          <tr>
            <th>
              <label htmlFor="website">Website</label>
            </th>
            <th>
              <input
                cols="15"
                rows="1"
                type="url"
                name="website"
                defaultValue={props.website}
              />
            </th>
          </tr>
          <tr>
            <th>
              <label htmlFor="address">Address</label>
            </th>
            <th>
              <textarea
                cols="15"
                rows="1"
                name="address"
                defaultValue={props.address}
              />
            </th>
          </tr>
        </table>
        <br />
        <input type="file" name="image" />
        <br />
        <br />

        <br />
        <Button color="primary" variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Paper>
  );
}

export default ProviderForm;
