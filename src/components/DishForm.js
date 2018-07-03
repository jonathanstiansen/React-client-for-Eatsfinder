import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

function DishForm(props) {
  const { onSubmit = () => {} } = props;

  const handleSubmit = event => {
    event.preventDefault();
    const { currentTarget } = event;

    const formData = new FormData(currentTarget);

    onSubmit(formData);

    currentTarget.reset();
  };

  return (
    <Paper style={{ padding: "4%" }}>
      <form onSubmit={handleSubmit} className="DishForm">
        <h3>New Dish</h3>

        <table class="newDishForm">
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
              <label htmlFor="dish_type">Dish type</label>
            </th>
            <th>
              <textarea
                cols="15"
                rows="1"
                name="dish_type"
                defaultValue={props.dish_type}
              />
            </th>
          </tr>
          <tr>
            <th>
              <label htmlFor="price">Price </label>
            </th>
            <th>
              <input
                cols="5"
                rows="1"
                name="price"
                defaultValue={props.price}
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
        </table>
        <br />
        <input type="file" name="image" />
        <br />
        <br />
        <Button color="prrimary" variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Paper>
  );
}

export default DishForm;
