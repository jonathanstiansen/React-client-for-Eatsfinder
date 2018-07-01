import React from "react";
import { StarRating } from "./StarRating";

function ReviewList(props) {
  const { reviews = [], onReviewDeleteClick = () => {} } = props;

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <p>Author: {review.user_name}</p>
          <p>{review.body}</p>
          <StarRating max={5} rating={review.rating} />
          <button onClick={() => onReviewDeleteClick(review.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ReviewList;
