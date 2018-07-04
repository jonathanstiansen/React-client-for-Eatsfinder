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
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  linkToDish = e => {
    this.props.history.push(`/providers`);
  };

  render() {
    const Icon = require("./MarkerIcon.svg");
    const UserIcon = require("./user_icon.png");
    const { user } = this.props;
    return (
      <Map
        google={this.props.google}
        style={{
          width: "100%",
          height: "100%"
        }}
        initialCenter={{
          lat: user.latitude,
          lng: user.longitude
        }}
        zoom={14}
        onClick={this.onMapClicked}
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
          }
        ]}
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

        <Marker
          icon={UserIcon}
          position={{
            lat: user.latitude,
            lng: user.longitude
          }}
        />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <a href={"/dishes/" + this.state.selectedPlace.dish_id}>
              {this.state.selectedPlace.name}
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
