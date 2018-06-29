import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { MAPS_KEY } from "../apikey";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker) => {
    this.setState({
      showingInfoWindow: true,
      activeMarker: marker,
      selectedPlace: props
    });
  };

  onMapClicked = props => {
    console.log("click");
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  linkToDish = e => {
    console.log("click");
    this.props.history.push(`/providers`);
  };

  render() {
    const Icon = require("./MarkerIcon.svg");
    return (
      <Map
        google={this.props.google}
        style={{
          width: "100%",
          height: "50%"
        }}
        initialCenter={{
          lat: 49.28206,
          lng: -123.111253
        }}
        zoom={14}
        onClick={this.onMapClicked}
      >
        {this.props.dishes.map(dish => (
          <Marker
            key={dish.id}
            onClick={this.onMarkerClick}
            icon={Icon}
            position={{ lat: dish.latitude, lng: dish.longitude }}
            name={dish.name}
            dish_id={dish.id}
          />
        ))}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div
            onClick={() => {
              alert("hello");
            }}
          >
            <a href={"/dishes/" + this.state.selectedPlace.dish_id}>
              {this.state.selectedPlace.name}
              {this.state.selectedPlace.dish_id}
            </a>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: MAPS_KEY
})(MapContainer);
