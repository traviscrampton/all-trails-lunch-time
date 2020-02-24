import React, { Component } from "react";
import Header from "./components/Header/Header";
import MapContainer from "./components/Map/Map";
import CardList from "./components/CardList/CardList";
import "./LunchTime.css";

class LunchTime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      restaurants: []
    };
  }

  handleTextChange = query => {
    this.setState({ searchText: query });
  };

  constructGooglePlacesUrl() {
    return `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.7908279,-122.4082753&radius=1500&type=restaurant&keyword=${this.state.searchText}&key=${process.env.REACT_APP_PLACES_API_KEY}`;
  }

  handleSearchSubmit = restaurants => {
    this.setState({ restaurants });
  };

  render() {
    return (
      <div className="app-container">
        <Header
          handleSearchSubmit={this.handleSearchSubmit}
          handleTextChange={this.handleTextChange}
        />
        <div className="app-body">
          <CardList restaurants={this.state.restaurants} />
          <MapContainer />
        </div>
      </div>
    );
  }
}

export default LunchTime;
