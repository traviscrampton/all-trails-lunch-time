import React from "react";
const star = require("../../star.svg");
const StarRating = props => {
  return (
    <React.Fragment>
      <span>{props.rating}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </React.Fragment>
  );
};

export default StarRating;
