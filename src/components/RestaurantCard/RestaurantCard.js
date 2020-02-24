import React from "react";
import "./RestaurantCard.css";
import StarRating from "../StarRating/StarRating";

const RestaurantCard = props => {
  return (
    <li key={props.id} className="restaurant-container">
      <img src={props.photoUrl} className="restaurant-image" />
      <div className="restaurant-metadata">
        <div className="restaurant-name">{props.name}</div>
        <StarRating />
        <div className="price-level-and-text"></div>
      </div>
    </li>
  );
};

export default RestaurantCard;
