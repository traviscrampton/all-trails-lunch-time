import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="searchbar-container">
        <input
          className="searchbar-text-input"
          placeholder="Search for a restaurant"
        />
        <button className="searchbar-button">S</button>
      </div>
    );
  }
}

export default SearchBar;
