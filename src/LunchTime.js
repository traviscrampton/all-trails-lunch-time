import React, { Component } from "react";
import Header from "./components/Header/Header";
import "./LunchTime.css";

class LunchTime extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-container">
        <Header />
      </div>
    );
  }
}

export default LunchTime;
