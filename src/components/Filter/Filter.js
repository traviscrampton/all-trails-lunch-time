import React, { Component } from "react";
import "./Filter.css";

class Filter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filter-container">
        <button className="filter-button">Filter</button>
      </div>
    );
  }
}

export default Filter;
