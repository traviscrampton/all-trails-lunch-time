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

  getButtonLabel() {
    return this.state.isOpen ? "Sort" : "Filter";
  }

  toggleFilterWindow = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  handleToggleSort = sort => {
    this.toggleFilterWindow();
    this.props.toggleSort(sort);
  };

  renderFilterDropdown() {
    if (!this.state.isOpen) return;

    return (
      <FilterDropdown
        sort={this.props.sort}
        toggleSort={this.handleToggleSort}
      />
    );
  }

  renderOpacCover() {
    if (!this.state.isOpen) return;

    return (
      <div onClick={this.toggleFilterWindow} className="filter-opac-cover" />
    );
  }

  render() {
    return (
      <Fragment>
        <div className="filter-container">
          <button
            onClick={this.toggleFilterWindow}
            className={classNames("filter-button", {
              isOpen: this.state.isOpen
            })}
          >
            {this.getButtonLabel()}
          </button>
          {this.renderFilterDropdown()}
        </div>
        {this.renderOpacCover()}
      </Fragment>
    );
  }
}

export default Filter;
