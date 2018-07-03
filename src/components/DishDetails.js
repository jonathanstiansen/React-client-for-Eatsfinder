import React from "react";
import Favorite from "./icons/Favorite";
import TumbUp from "./icons/ThumbUp";
import Button from "@material-ui/core/Button";

function DishDetails(props) {
  const { onDeleteClick = () => {} } = props;

  return (
    <div className="DishDetails">
      <img src={props.image_url} alt={props.name} />
      <h2>
        {props.name} - ${props.price}
      </h2>
      <h3> {props.description}</h3>
      <div class="center_div">
        <div>
          <TumbUp />
        </div>
        <div> {props.likes_number}</div>
        &nbsp; &nbsp;
        <div>
          <Favorite />{" "}
        </div>
        <div>{props.favoris_number}</div>
      </div>
      <br />
      <Button
        onClick={() => onDeleteClick(props.id)}
        color="prrimary"
        variant="contained"
      >
        Delete
      </Button>
      &nbsp;
      <Button color="prrimary" variant="contained">
        Edit
      </Button>
    </div>
  );
}

export default DishDetails;
