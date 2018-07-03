import React from "react";
import { StarRating } from "./StarRating";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

function ReviewList(props) {
  const { reviews = [], onReviewDeleteClick = () => {} } = props;

  return (
    <ul
      style={{
        paddingTop: "5px",
        paddingLeft: 0,
        margin: 0,
        listStyle: "none"
      }}
    >
      {reviews.map(review => (
        <Paper style={{ padding: "5%", marginBottom: "15px" }}>
          <li>
            <StarRating max={5} rating={review.rating} />
            <h3>{review.user_name}</h3>
            <p>{review.body}</p>
            <Button
              onClick={() => onReviewDeleteClick(review.id)}
              color="prrimary"
              variant="contained"
            >
              Delete
            </Button>
          </li>
        </Paper>
      ))}
    </ul>
  );
}

export default ReviewList;
