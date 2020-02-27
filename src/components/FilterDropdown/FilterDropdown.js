import React, { Component } from "react";
import "./FilterDropdown.css";
import PropTypes from "prop-types";

class FilterDropdown extends Component {
  constructor(props) {
    super(props);

    // this the current radio button, not the sort for the entire app
    // after submit that is fired off
    this.state = {
      sort: props.sort
    };
  }

  handleRadioClick = e => {
    this.setState({ sort: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.toggleSort(this.state.sort);
  };

  render() {
    return (
      <div className="filter-dropdown-container">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label className="label-container">
              Ratings High to Low
              <input
                type="radio"
                value="desc"
                className="desc"
                onChange={this.handleRadioClick}
                checked={this.state.sort === "desc"}
              />
              <span className="checkmark">
                <i className="material-icons">check</i>
              </span>
            </label>
          </div>
          <div>
            <label className="label-container">
              Ratings Low to High
              <input
                type="radio"
                value="asc"
                className="asc"
                onChange={this.handleRadioClick}
                checked={this.state.sort === "asc"}
              />
              <span className="checkmark">
                <i className="material-icons">check</i>
              </span>
            </label>
          </div>
          <input className="sort-submit" type="submit" value="Apply" />
        </form>
      </div>
    );
  }
}

FilterDropdown.propTypes = {
  toggleSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired
};

export default FilterDropdown;
