import React from "react";
import Button from "@material-ui/core/Button";

function ReviewForm(props) {
  const { onSubmit = () => {} } = props;

  const handleSubmit = event => {
    event.preventDefault();
    const { currentTarget } = event;

    const formData = new FormData(currentTarget);

    onSubmit({
      body: formData.get("body"),
      rating: formData.get("rating")
    });

    currentTarget.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="ReviewForm"
      style={{ marginBottom: "10px" }}
    >
      <textarea cols="40" rows="4" name="body" /> <br />
      <tbody>
        <tr>
          <td>
            <input type="radio" name="rating" value="1" />
            <label>1</label>
          </td>
          <td>
            <input type="radio" name="rating" value="2" />
            <label>2</label>
          </td>
          <td>
            <input type="radio" name="rating" value="3" />
            <label>3</label>
          </td>
          <td>
            <input type="radio" name="rating" value="4" />
            <label>4</label>
          </td>
          <td>
            <input type="radio" name="rating" value="5" />
            <label>5 &nbsp;</label>
          </td>
          <Button type="submit">Submit</Button>
        </tr>
      </tbody>
    </form>
  );
}

export default ReviewForm;
