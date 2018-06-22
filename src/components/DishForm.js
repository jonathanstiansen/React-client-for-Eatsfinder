import React from "react";

function DishForm(props) {
  const { onSubmit = () => {} } = props;

  const handleSubmit = event => {
    event.preventDefault();
    const { currentTarget } = event;

    const formData = new FormData(currentTarget);

    onSubmit({
      name: formData.get("name"),
      dish_type: formData.get("dish_type"),
      description: formData.get("description"),
      price: formData.get("price")
    });

    currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="DishForm">
      <h3>New Dish</h3>
      <label htmlFor="name">Name</label>
      <textarea cols="15" rows="1" name="name" defaultValue={props.name} />
      <br />
      <label htmlFor="dish_type">Dish type</label>
      <textarea
        cols="15"
        rows="1"
        name="dish_type"
        defaultValue={props.dish_type}
      />
      <br />
      <label htmlFor="description">
        Description
        <textarea
          cols="15"
          rows="1"
          name="description"
          defaultValue={props.description}
        />
        <br />
      </label>
      <label htmlFor="price">
        Price
        <textarea cols="5" rows="1" name="price" defaultValue={props.price} />
      </label>

      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default DishForm;
