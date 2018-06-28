import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { MAPS_KEY } from "../apikey";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: true
  };

  onMarkerClick = (props, marker, e) => {
    console.log("click marker");

    this.setState({
      showingInfoWindow: true,
      activeMarker: marker
    });
  };

  onMapClicked = props => {
    console.log("click map");
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
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
        onClick={this.onMapClicked}
      >
        <Marker onClick={this.onMarkerClick} icon={Icon} />
        <InfoWindow
          position={{
            lat: this.props.latitude + 0.002,
            lng: this.props.longitude
          }}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <p>{this.props.name}</p>
            <p>{this.props.address}</p>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: MAPS_KEY
})(MapContainer);
