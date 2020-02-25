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
      markers: []
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

    if (prevProps.activeRestaurant.id !== this.props.activeRestaurant.id) {
      this.closeOpenWindow(prevProps.activeRestaurant);
      this.openActiveRestaurantInfoWindow();
    }
  }

  removeMarkers = () => {
    for (let marker of this.state.markers) {
      marker.setMap(null);
    }
  };

  closeOpenWindow = activeRestaurant => {
    if (activeRestaurant.id === null) return;

    const activeMarker = this.state.markers.find(marker => {
      return marker.restaurant.id === activeRestaurant.id;
    });

    activeMarker.infoWindow.close();
  };

  openActiveRestaurantInfoWindow() {
    if (!this.props.activeRestaurant.id) return;

    const activeMarker = this.state.markers.find(marker => {
      return marker.restaurant.id === this.props.activeRestaurant.id;
    });

    const { infoWindow } = activeMarker;

    infoWindow.setContent(
      renderToString(<RestaurantCard restaurant={activeMarker.restaurant} />)
    );
    infoWindow.open(this.googleMap, activeMarker.marker);
  }

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
      this.closeOpenWindow(this.props.activeRestaurant);
      infoWindow.setContent(
        renderToString(<RestaurantCard restaurant={restaurant} />)
      );
      infoWindow.open(this.googleMap, marker);
      this.props.updateActiveRestaurant(restaurant);
    });

    window.google.maps.event.addListener(infoWindow, "closeclick", () => {
      this.props.updateActiveRestaurant({ id: null });
    });

    return { marker, infoWindow, restaurant };
  }

  generateNewMarkers = () => {
    const markers = this.props.restaurants.map(restaurant => {
      return this.createMarker(restaurant);
    });

    this.setState({ markers });
  };

  updateMapMarkers() {
    this.removeMarkers();
    this.generateNewMarkers();
    this.props.toggleNewSearchFalse();
  }

  render() {
    return <div ref={this.mapContainer} id="map-container"></div>;
  }
}

export default MapContainer;
