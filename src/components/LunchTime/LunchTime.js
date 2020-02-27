import React, { Component } from "react";
import Header from "../Header/Header";
import MapContainer from "../MapContainer/MapContainer";
import CardList from "../CardList/CardList";
import _ from "lodash";
import "./LunchTime.css";

class LunchTime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      restaurants: [],
      newSearch: false,
      activeRestaurant: { id: null },
      sort: "desc",
      favoriteIds: []
    };
  }

  toggleSort = sort => {
    const restaurants = this.getSortedRestaurants(this.state.restaurants, sort);
    this.setState({ sort, restaurants });
  };

  addIdToFavorites(id) {
    return [...this.state.favoriteIds, id];
  }

  removeIdFromFavorites(id) {
    return this.state.favoriteIds.filter(favId => {
      return favId !== id;
    });
  }

  updateFavoriteIds = (e, id) => {
    e.preventDefault();

    const favoriteIds = this.state.favoriteIds.includes(id)
      ? this.removeIdFromFavorites(id)
      : this.addIdToFavorites(id);

    this.setState({ favoriteIds });
  };

  handleTextChange = query => {
    this.setState({ searchText: query });
  };

  toggleNewSearchFalse = () => {
    this.setState({ newSearch: false });
  };

  getSortedRestaurants(restaurants, sort) {
    return _.orderBy(restaurants, "rating", sort);
  }

  handleSearchSubmit = incomingRestaurants => {
    const restaurants = this.getSortedRestaurants(
      incomingRestaurants,
      this.state.sort
    );
    this.setState({ restaurants, newSearch: true });
  };

  updateActiveRestaurant = activeRestaurant => {
    this.setState({ activeRestaurant });
  };

  render() {
    return (
      <div className="app-container">
        <Header
          toggleSort={this.toggleSort}
          sort={this.state.sort}
          handleSearchSubmit={this.handleSearchSubmit}
          handleTextChange={this.handleTextChange}
          searchText={this.state.searchText}
        />
        <div className="app-body">
          <CardList
            restaurants={this.state.restaurants}
            activeRestaurant={this.state.activeRestaurant}
            updateActiveRestaurant={this.updateActiveRestaurant}
            updateFavoriteIds={this.updateFavoriteIds}
            favoriteIds={this.state.favoriteIds}
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
