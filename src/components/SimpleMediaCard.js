import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const styles = {
  card: {
    maxWidth: "100%",
    margine: "20x",
    border: "10px"
  },
  media: {
    height: 0,
    paddingTop: "90.25%"
  }
};

function SimpleMediaCard(props) {
  const { classes, url, name, price } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={url}
          title={name + " $" + price}
        />
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleMediaCard);
