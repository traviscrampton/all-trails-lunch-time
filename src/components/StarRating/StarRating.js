import React from "react";
import "./StarRating.css";
const classNames = require("classnames");

const Star = ({ isGoldStar }) => {
  return (
    <i
      className={classNames("material-icons star", {
        goldstar: isGoldStar
      })}
    >
      star
    </i>
  );
};

const Stars = ({ rating }) => {
  const roundedRating = Math.round(rating);
  return [...Array(5)].map((e, i) => {
    return <Star isGoldStar={i + 1 <= roundedRating} key={i} />;
  });
};

const StarRating = ({ rating, userRatingsTotal }) => {
  return (
    <div className="star-rating-container">
      <Stars rating={rating} />
      <span className="user-rating-count">({userRatingsTotal})</span>
    </div>
  );
};

export default StarRating;
