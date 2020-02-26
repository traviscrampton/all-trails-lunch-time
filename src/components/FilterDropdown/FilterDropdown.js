import React, { Component } from "react";
import "./FilterDropdown.css";

class FilterDropdown extends Component {
  constructor(props) {
    super(props);

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
      <div className="filter-dropdown-container" onSubmit={this.handleSubmit}>
        <form>
          <div>
            <label className="label-container">
              Ratings High to Low
              <input
                type="radio"
                value="desc"
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

export default FilterDropdown;
