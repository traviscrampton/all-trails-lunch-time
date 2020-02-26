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
      onMouseOver={() => props.updateActiveRestaurant(restaurant)}
      onMouseOut={() => props.updateActiveRestaurant({ id: null })}
      className={classNames("restaurant-container", {
        activeRestaurant: props.isActiveRestaurant
      })}
    >
      <a href={restaurant.placeUrl} target="_blank" className="restaurant-link">
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
      </a>
    </li>
  );
};

export default RestaurantCard;
