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
      newSearch: false
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

  render() {
    return (
      <div className="app-container">
        <Header
          handleSearchSubmit={this.handleSearchSubmit}
          handleTextChange={this.handleTextChange}
        />
        <div className="app-body">
          <CardList restaurants={this.state.restaurants} />
          <MapContainer
            restaurants={this.state.restaurants}
            newSearch={this.state.newSearch}
            toggleNewSearchFalse={this.toggleNewSearchFalse}
          />
        </div>
      </div>
    );
  }
}

export default LunchTime;
