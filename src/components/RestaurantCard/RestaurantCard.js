import React from "react";
import "./RestaurantCard.css";
import StarRating from "../StarRating/StarRating";
import PropTypes from "prop-types";
import PriceLevel from "../PriceLevel/PriceLevel";
import FavoriteHeart from "../FavoriteHeart/FavoriteHeart";
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
      <a
        href={restaurant.placeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="restaurant-link"
      >
        <img
          src={restaurant.photoUrl}
          alt="storefront"
          className="restaurant-image"
        />
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
        <FavoriteHeart
          isFavorite={props.isFavorite}
          updateFavoriteIds={e => props.updateFavoriteIds(e, restaurant.id)}
        />
      </a>
    </li>
  );
};

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    placeUrl: PropTypes.string,
    rating: PropTypes.number,
    userRatingsTotal: PropTypes.number,
    priceLevels: PropTypes.number,
    photoUrl: PropTypes.string,
    supportingText: PropTypes.string,
    latLng: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number
    })
  }),
  isActiveRestaurant: PropTypes.bool,
  updateActiveRestaurant: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool,
  updateFavoriteIds: PropTypes.func
};

export default RestaurantCard;
