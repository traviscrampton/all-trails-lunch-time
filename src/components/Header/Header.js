import React, { Component } from "react";
import Filter from "../Filter/Filter";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
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
          <Filter />
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default Header;
