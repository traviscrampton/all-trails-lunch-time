import React, { Component } from "react";
import "./FilterDropdown.css";

class FilterDropdown extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filter-dropdown-container">
        <form>
          <div>
            <label>
              <input type="radio" value="highToLow" />
              Ratings High to Low
            </label>
          </div>
          <div>
            <label>
              <input type="radio" value="lowToHigh" />
              Ratings Low to High
            </label>
          </div>
          <button type="submit">Apply</button>
        </form>
      </div>
    );
  }
}

export default FilterDropdown;
