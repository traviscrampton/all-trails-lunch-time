import React, { Component } from "react";
import "./Map.css";
import { renderToString } from "react-dom/server";

import RestaurantCard from "../RestaurantCard/RestaurantCard";
const staticPin = require("../../static-pin.png");

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.mapContainer = React.createRef();

    this.state = {
      markers: [],
      openInfoWindow: null
    };
  }

  static ALL_TRAILS_LAT_LNG = { lat: 37.7908279, lng: -122.4082753 };

  componentDidMount() {
    this.googleMap = new window.google.maps.Map(this.mapContainer.current, {
      center: MapContainer.ALL_TRAILS_LAT_LNG,
      zoom: 14
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.newSearch === false && this.props.newSearch === true) {
      this.updateMapMarkers();
    }
  }

  removeMarkers = () => {
    for (let marker of this.state.markers) {
      marker.setMap(null);
    }
  };

  closeOpenWindow = () => {
    if (!this.state.openInfoWindow) return;

    this.state.openInfoWindow.close();
  };

  createMarker(restaurant) {
    const marker = new window.google.maps.Marker({
      position: new window.google.maps.LatLng(
        restaurant.latLng.lat,
        restaurant.latLng.lng
      ),
      map: this.googleMap,
      icon: staticPin,
      title: restaurant.name
    });
    const infoWindow = new window.google.maps.InfoWindow();

    window.google.maps.event.addListener(marker, "click", () => {
      this.closeOpenWindow();
      infoWindow.setContent(renderToString(<RestaurantCard {...restaurant} />));
      infoWindow.open(this.googleMap, marker);
      this.setState({ openInfoWindow: infoWindow });
    });

    return marker;
  }

  generateNewMarkers = () => {
    const markers = this.props.restaurants.map(restaurant => {
      this.createMarker(restaurant);
    });

    this.setState({ markers });
  };

  updateMapMarkers() {
    // if there are any map markers remove them
    this.removeMarkers();
    this.generateNewMarkers();
    this.props.toggleNewSearchFalse();

    // create new map markers based on the state
  }

  render() {
    return <div ref={this.mapContainer} id="map-container"></div>;
  }
}

export default MapContainer;
