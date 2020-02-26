import React from "react";
import "./PriceLevel.css";

const getDollarSigns = priceLevel => {
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
      <span>{dollarSigns} </span>
      <span>{"\u2022"} </span>
      <span>{supportingText}</span>
    </div>
  );
};

export default PriceLevel;
