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
    this.props.handleSearchSubmit();
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
        <button className="searchbar-button">S</button>
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
