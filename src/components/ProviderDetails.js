import React from "react";

function ProviderDetails(props) {
  return (
    <div className="ProviderDetails">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.email}</p>
      <p>{props.phone_number}</p>
      <p>{props.website}</p>
      <p>{props.address}</p>
      <img src={props.image_url} />
    </div>
  );
}

export default ProviderDetails;
