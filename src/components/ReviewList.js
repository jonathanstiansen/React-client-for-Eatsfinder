import React from "react";

function ReviewList(props) {
  const { reviews = [], onReviewDeleteClick = () => {} } = props;

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <p>body: {review.body}</p>
          <button onClick={() => onReviewDeleteClick(review.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ReviewList;
