import React, { Component } from "react";
import "./Header.css";
import PropTypes from "prop-types";
import Filter from "../Filter/Filter";
import SearchBar from "../SearchBar/SearchBar";
const logo = require("../../logo.png");

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-container">
        <img src={logo} className="header-logo" />
        <div className="header-filter-searchbar">
          <Filter toggleSort={this.props.toggleSort} sort={this.props.sort} />
          <SearchBar
            searchText={this.props.searchText}
            handleSearchSubmit={this.props.handleSearchSubmit}
            handleTextChange={this.props.handleTextChange}
          />
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  toggleSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  searchText: PropTypes.string
};

export default Header;
