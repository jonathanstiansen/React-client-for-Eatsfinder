import React from "react";

function ProviderNewForm(props) {
  const { onSubmit = () => {} } = props;

  const handleSubmit = event => {
    event.preventDefault();
    const { currentTarget } = event;

    const formData = new FormData(currentTarget);

    onSubmit({
      name: formData.get("name"),
      description: formData.get("description"),
      email: formData.get("email"),
      phone_number: formData.get("phone_number"),
      website: formData.get("website"),
      address: formData.get("address")
    });

    currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="ProviderNewForm">
      <label htmlFor="name">Name</label>
      <textarea cols="15" rows="1" name="name" /> <br />
      <label htmlFor="description">Description</label>
      <textarea cols="15" rows="1" name="description" /> <br />
      <label htmlFor="email">Email</label>
      <textarea cols="15" rows="1" name="email" /> <br />
      <label htmlFor="phone_number">Phone_number</label>
      <textarea cols="15" rows="1" name="phone_number" /> <br />
      <label htmlFor="website">Website</label>
      <textarea cols="15" rows="1" name="website" /> <br />
      <label htmlFor="address">Address</label>
      <textarea cols="15" rows="1" name="address" /> <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default ProviderNewForm;
