import React from "react";
import PropTypes from "prop-types";
import "./PriceLevel.css";

const getDollarSigns = priceLevel => {
  if (!priceLevel || priceLevel === 0) {
    return "$";
  }

  let dollarSigns = "";

  for (let i = 0; i < priceLevel; i++) {
    dollarSigns += "$";
  }

  return dollarSigns;
};

const PriceLevel = ({ priceLevel, supportingText }) => {
  const dollarSigns = getDollarSigns(priceLevel);
  return (
    <div className="price-level-container">
      <span className="dollar-signs">{dollarSigns} </span>
      <span>{"\u2022"} </span>
      <span className="supporting-text">{supportingText}</span>
    </div>
  );
};

PriceLevel.propTypes = {
  priceLevel: PropTypes.number,
  supportingText: PropTypes.string
};

export default PriceLevel;
