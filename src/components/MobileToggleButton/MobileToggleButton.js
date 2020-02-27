import React from "react";
import PropTypes from "prop-types";
import "./MobileToggleButton.css";

const ButtonCopy = ({ isMobileFullMap }) => {
  if (isMobileFullMap) {
    return (
      <div className="button-copy">
        <i className="material-icons">list</i>
        <span>List</span>
      </div>
    );
  }

  return (
    <div className="button-copy">
      <i className="material-icons">place</i>
      <span>Map</span>
    </div>
  );
};

const MobileToggleButton = ({ isMobileFullMap, toggleIsMobileFullMap }) => {
  return (
    <button className="mobile-toggle-button" onClick={toggleIsMobileFullMap}>
      <ButtonCopy isMobileFullMap={isMobileFullMap} />
    </button>
  );
};

MobileToggleButton.propTypes = {
  toggleIsMobileFullMap: PropTypes.func,
  isMobileFullMap: PropTypes.bool
};

export default MobileToggleButton;
