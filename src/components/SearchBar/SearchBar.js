import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  handleTextChange = e => {
    this.props.handleTextChange(e.currentTarget.value);
  };

  submitSearchQuery = e => {
    e.preventDefault();
    const {
      google: { maps }
    } = window;
    const allTrailsHQ = new maps.LatLng(37.7908279, -122.4082753);
    // TODO: Figure out a way to not map refresh on search
    const map = new maps.Map(document.createElement("div"), {
      center: allTrailsHQ,
      zoom: 14
    });
    const request = {
      location: allTrailsHQ,
      radius: "200",
      query: this.props.searchText,
      type: "restaurant"
    };

    const service = new maps.places.PlacesService(map);
    service.textSearch(request, this.parseSearchResults);
  };

  getFirstPhotoUrl(photos) {
    if (!photos) {
      return null;
    }

    return photos[0].getUrl();
  }

  parseSearchResults = (results, status) => {
    if (status == window.google.maps.places.PlacesServiceStatus.OK) {
      const restaurants = results.map(result => {
        return {
          id: result.id,
          name: result.name,
          rating: result.rating,
          userRatingsTotal: result.user_ratings_total,
          priceLevels: result.price_level,
          photoUrl: this.getFirstPhotoUrl(result.photos),
          supportingText: result.types[0].replace("_", " "),
          latLng: {
            lat: result.geometry.location.lat(),
            lng: result.geometry.location.lng()
          }
        };
      });

      this.props.handleSearchSubmit(restaurants);
    }
  };

  render() {
    return (
      <form className="searchbar-container" onSubmit={this.submitSearchQuery}>
        <input
          className="searchbar-text-input"
          placeholder="Search for a restaurant"
          value={this.props.searchText}
          onChange={this.handleTextChange}
        />
        <button className="searchbar-button">
          <i className="material-icons search">search</i>
        </button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  handleSearchSubmit: PropTypes.func.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  searchText: PropTypes.string
};

export default SearchBar;
