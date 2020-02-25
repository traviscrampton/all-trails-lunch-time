import React, { Component, Fragment } from "react";
import "./Filter.css";
import FilterDropdown from "../FilterDropdown/FilterDropdown";
const classNames = require("classnames");

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggleFilter = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  renderFilterDropdown() {
    if (!this.state.isOpen) return;

    return <FilterDropdown />;
  }

  renderOpacCover() {
    if (!this.state.isOpen) return;

    return <div onClick={this.toggleFilter} className="filter-opac-cover" />;
  }

  render() {
    return (
      <Fragment>
        <div className={"filter-container"}>
          <button onClick={this.toggleFilter} className="filter-button">
            Filter
          </button>
          {this.renderFilterDropdown()}
        </div>
        {this.renderOpacCover()}
      </Fragment>
    );
  }
}

export default Filter;
