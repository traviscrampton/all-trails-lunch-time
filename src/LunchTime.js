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
      restaurants: [],
      newSearch: false,
      activeRestaurant: { id: null }
    };
  }

  handleTextChange = query => {
    this.setState({ searchText: query });
  };

  toggleNewSearchFalse = () => {
    this.setState({ newSearch: false });
  };

  handleSearchSubmit = restaurants => {
    this.setState({ restaurants, newSearch: true });
  };

  updateActiveRestaurant = activeRestaurant => {
    this.setState({ activeRestaurant });
  };

  render() {
    return (
      <div className="app-container">
        <Header
          handleSearchSubmit={this.handleSearchSubmit}
          handleTextChange={this.handleTextChange}
        />
        <div className="app-body">
          <CardList
            restaurants={this.state.restaurants}
            activeRestaurant={this.state.activeRestaurant}
            updateActiveRestaurant={this.updateActiveRestaurant}
          />
          <MapContainer
            restaurants={this.state.restaurants}
            newSearch={this.state.newSearch}
            activeRestaurant={this.state.activeRestaurant}
            toggleNewSearchFalse={this.toggleNewSearchFalse}
            updateActiveRestaurant={this.updateActiveRestaurant}
          />
        </div>
      </div>
    );
  }
}

export default LunchTime;
