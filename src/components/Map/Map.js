import React, { Component } from "react";
import "./Map.css";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.mapContainer = React.createRef();
  }

  static ALL_TRAILS_LAT_LNG = { lat: 37.7908279, lng: -122.4082753 };

  componentDidMount() {
    new window.google.maps.Map(this.mapContainer.current, {
      center: MapContainer.ALL_TRAILS_LAT_LNG,
      zoom: 14
    });
  }

  render() {
    return <div ref={this.mapContainer} id="map-container"></div>;
  }
}

export default MapContainer;
