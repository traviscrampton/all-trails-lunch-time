import React from "react";
import "./RestaurantCard.css";
import StarRating from "../StarRating/StarRating";
import PriceLevel from "../PriceLevel/PriceLevel";
const classNames = require("classnames");

const RestaurantCard = props => {
  const { restaurant } = props;

  return (
    <li
      key={restaurant.id}
      onClick={() => props.updateActiveRestaurant(restaurant)}
      className={classNames("restaurant-container", {
        activeRestaurant: props.isActiveRestaurant
      })}
    >
      <img src={restaurant.photoUrl} className="restaurant-image" />
      <div className="restaurant-metadata">
        <div className="restaurant-name">{restaurant.name}</div>
        <StarRating
          rating={restaurant.rating}
          userRatingsTotal={restaurant.userRatingsTotal}
        />
        <PriceLevel
          priceLevel={restaurant.priceLevels}
          supportingText={restaurant.supportingText}
        />
      </div>
    </li>
  );
};

export default RestaurantCard;
