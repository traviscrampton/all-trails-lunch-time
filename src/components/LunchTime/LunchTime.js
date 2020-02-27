import React, { Component } from "react";
import Header from "../Header/Header";
import MapContainer from "../MapContainer/MapContainer";
import CardList from "../CardList/CardList";
import MobileToggleButton from "../MobileToggleButton/MobileToggleButton";
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
      favoriteIds: [],
      windowWidth: window.innerWidth,
      isMobileFullMap: false
    };
  }

  componentDidMount() {
    window.addEventListener(
      "resize",
      _.debounce(this.updateWindowDimensions.bind(this)),
      200
    );
  }

  updateWindowDimensions = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  toggleSort = sort => {
    // sorts the restaurant and then updates the sort state
    const restaurants = this.getSortedRestaurants(this.state.restaurants, sort);
    this.setState({ sort, restaurants });
  };

  toggleIsMobileFullMap = () => {
    let { isMobileFullMap } = this.state;
    isMobileFullMap = !isMobileFullMap;

    this.setState({ isMobileFullMap });
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
    // updates text for the search bar
    this.setState({ searchText: query });
  };

  toggleNewSearchFalse = () => {
    // updates from the MapComponent that a new search is over so Map knows to re-render the map pins
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
    // this fires when a restaurant is hovered on
    this.setState({ activeRestaurant });
  };

  isNotMobileScreen() {
    return this.state.windowWidth > 550;
  }

  returnActiveClass() {
    if (this.isNotMobileScreen()) {
      return "";
    }

    return this.state.isMobileFullMap ? "fullMap" : "fullCardList";
  }

  renderMobileToggleButton() {
    if (this.isNotMobileScreen()) return;

    return (
      <MobileToggleButton
        isMobileFullMap={this.state.isMobileFullMap}
        toggleIsMobileFullMap={this.toggleIsMobileFullMap}
      />
    );
  }

  render() {
    const activeClass = this.returnActiveClass();
    return (
      <div className="app-container">
        <Header
          toggleSort={this.toggleSort}
          sort={this.state.sort}
          handleSearchSubmit={this.handleSearchSubmit}
          handleTextChange={this.handleTextChange}
          searchText={this.state.searchText}
        />
        <div className={`app-body ${activeClass}`}>
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
          {this.renderMobileToggleButton()}
        </div>
      </div>
    );
  }
}

export default LunchTime;
