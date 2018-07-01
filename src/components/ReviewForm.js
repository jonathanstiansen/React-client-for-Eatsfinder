import React from "react";

function ReviewForm(props) {
  const { onSubmit = () => {} } = props;

  const handleSubmit = event => {
    event.preventDefault();
    const { currentTarget } = event;

    const formData = new FormData(currentTarget);

    onSubmit({
      body: formData.get("body")
    });

    currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="ReviewForm">
      <textarea cols="40" rows="4" name="body" /> <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default ReviewForm;
