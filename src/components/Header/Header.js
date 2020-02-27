import React from "react";
import "./Header.css";
import PropTypes from "prop-types";
import Filter from "../Filter/Filter";
import SearchBar from "../SearchBar/SearchBar";
const logo = require("../../logo.png");

const Header = props => {
  return (
    <div className="header-container">
      <img src={logo} className="header-logo" />
      <div className="header-filter-searchbar">
        <Filter toggleSort={props.toggleSort} sort={props.sort} />
        <SearchBar
          searchText={props.searchText}
          handleSearchSubmit={props.handleSearchSubmit}
          handleTextChange={props.handleTextChange}
        />
      </div>
    </div>
  );
};

Header.propTypes = {
  toggleSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  searchText: PropTypes.string
};

export default Header;
