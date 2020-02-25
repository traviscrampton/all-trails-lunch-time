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
            <label>
              <input
                type="radio"
                value="desc"
                onChange={this.handleRadioClick}
                checked={this.state.sort === "desc"}
              />
              Ratings High to Low
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="asc"
                onChange={this.handleRadioClick}
                checked={this.state.sort === "asc"}
              />
              Ratings Low to High
            </label>
          </div>
          <input type="submit" value="Apply" />
        </form>
      </div>
    );
  }
}

export default FilterDropdown;
