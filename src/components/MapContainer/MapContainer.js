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
    this.googleMapsInstance = window.google.maps;

    this.state = {
      interestPoints: []
    };
  }

  static ALL_TRAILS_LAT_LNG = { lat: 37.7908279, lng: -122.4082753 };

  componentDidMount() {
    // loads the google map onto the page
    this.googleMap = new this.googleMapsInstance.Map(
      this.mapContainer.current,
      {
        center: MapContainer.ALL_TRAILS_LAT_LNG,
        zoom: 16
      }
    );
  }

  componentDidUpdate(prevProps, prevState) {
    // if there is a new search, we need to remove old markers and put new ones in
    if (prevProps.newSearch === false && this.props.newSearch === true) {
      this.updateMapMarkers();
    }

    // if the activeRestaurant changes, the markers need to change as well
    if (prevProps.activeRestaurant.id !== this.props.activeRestaurant.id) {
      this.closeOpenWindow(prevProps.activeRestaurant);
      this.openActiveRestaurantInfoWindow();
    }
  }

  removeMarkers = () => {
    for (let interestPoint of this.state.interestPoints) {
      interestPoint.marker.setMap(null);
    }
  };

  closeOpenWindow = activeRestaurant => {
    if (activeRestaurant.id === null) return;

    const activeInterestPoint = this.state.interestPoints.find(
      interestPoint => {
        return interestPoint.restaurant.id === activeRestaurant.id;
      }
    );

    if (activeInterestPoint) {
      activeInterestPoint.marker.setIcon(staticPin);
      activeInterestPoint.infoWindow.close();
    }
  };

  openActiveRestaurantInfoWindow() {
    if (!this.props.activeRestaurant.id) return;

    const activeInterestPoint = this.state.interestPoints.find(
      interestPoint => {
        return interestPoint.restaurant.id === this.props.activeRestaurant.id;
      }
    );

    const { infoWindow } = activeInterestPoint;

    activeInterestPoint.marker.setIcon(activePin);
    infoWindow.setContent(
      renderToString(
        <RestaurantCard restaurant={activeInterestPoint.restaurant} />
      )
    );
    infoWindow.open(this.googleMap, activeInterestPoint.marker);
  }

  createInterestPoint(restaurant) {
    const marker = new this.googleMapsInstance.Marker({
      position: new this.googleMapsInstance.LatLng(
        restaurant.latLng.lat,
        restaurant.latLng.lng
      ),
      map: this.googleMap,
      icon: staticPin,
      title: restaurant.name
    });
    const infoWindow = new this.googleMapsInstance.InfoWindow();

    // add event listeners for mouse over and mouse out on marker
    this.googleMapsInstance.event.addListener(marker, "mouseover", () => {
      this.closeOpenWindow(this.props.activeRestaurant);
      infoWindow.setContent(
        renderToString(<RestaurantCard restaurant={restaurant} />)
      );
      infoWindow.open(this.googleMap, marker);
      marker.setIcon(activePin);
      this.props.updateActiveRestaurant(restaurant);
    });

    this.googleMapsInstance.event.addListener(infoWindow, "mouseout", () => {
      this.props.updateActiveRestaurant({ id: null });
      marker.setIcon(staticPin);
    });

    return { marker, infoWindow, restaurant };
  }

  generateNewInterestPoints = () => {
    const interestPoints = this.props.restaurants.map(restaurant => {
      return this.createInterestPoint(restaurant);
    });

    this.setState({ interestPoints });
  };

  updateMapMarkers() {
    this.removeMarkers();
    this.generateNewInterestPoints();
    this.props.toggleNewSearchFalse(); // lets the Parent component know that the markers have been updated
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
