import React, { Component } from "react";
import "./MapContainer.css";
import PropTypes from "prop-types";
import { renderToString } from "react-dom/server";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
const staticPin = require("../../static-pin.png");
const activePin = require("../../active-pin.png");

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
      marker.marker.setMap(null);
    }
  };

  closeOpenWindow = activeRestaurant => {
    if (activeRestaurant.id === null) return;

    const activeMarker = this.state.markers.find(marker => {
      return marker.restaurant.id === activeRestaurant.id;
    });

    activeMarker.marker.setIcon(staticPin);
    activeMarker.infoWindow.close();
  };

  openActiveRestaurantInfoWindow() {
    if (!this.props.activeRestaurant.id) return;

    const activeMarker = this.state.markers.find(marker => {
      return marker.restaurant.id === this.props.activeRestaurant.id;
    });

    const { infoWindow } = activeMarker;

    activeMarker.marker.setIcon(activePin);
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

    window.google.maps.event.addListener(marker, "mouseover", () => {
      this.closeOpenWindow(this.props.activeRestaurant);
      infoWindow.setContent(
        renderToString(<RestaurantCard restaurant={restaurant} />)
      );
      infoWindow.open(this.googleMap, marker);
      marker.setIcon(activePin);
      this.props.updateActiveRestaurant(restaurant);
    });

    window.google.maps.event.addListener(infoWindow, "mouseout", () => {
      this.props.updateActiveRestaurant({ id: null });
      marker.setIcon(staticPin);
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

MapContainer.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      placeUrl: PropTypes.string,
      rating: PropTypes.number,
      userRatingsTotal: PropTypes.number,
      priceLevels: PropTypes.number,
      photoUrl: PropTypes.string,
      supportingText: PropTypes.string,
      latLng: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number
      })
    })
  ),
  activeRestaurant: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    placeUrl: PropTypes.string,
    rating: PropTypes.number,
    userRatingsTotal: PropTypes.number,
    priceLevels: PropTypes.number,
    photoUrl: PropTypes.string,
    supportingText: PropTypes.string,
    latLng: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number
    })
  }),
  newSearch: PropTypes.bool,
  toggleNewSearchFalse: PropTypes.func.isRequired,
  updateActiveRestaurant: PropTypes.func.isRequired
};

export default MapContainer;