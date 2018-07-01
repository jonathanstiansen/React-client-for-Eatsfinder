import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { MAPS_KEY } from "../apikey";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: true
  };

  render() {
    const Icon = require("./MarkerIcon.svg");
    return (
      <Map
        google={this.props.google}
        style={{
          width: "50%",
          height: "50%"
        }}
        initialCenter={{
          lat: this.props.latitude,
          lng: this.props.longitude
        }}
        zoom={14}
        styles={[
          {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "administrative.land_parcel",
            elementType: "labels",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "poi",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "poi",
            elementType: "labels.text",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "road.local",
            elementType: "labels",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "transit",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "water",
            stylers: [
              {
                color: "#b1a0c3"
              }
            ]
          }
        ]}
      >
        <Marker icon={Icon} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: MAPS_KEY
})(MapContainer);
