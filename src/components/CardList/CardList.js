import React from "react";
import PropTypes from "prop-types";
import "./CardList.css";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

const CardList = props => {
  let isActiveRestaurant;
  let isFavorite;
  const restaurants = props.restaurants.map(restaurant => {
    isActiveRestaurant = restaurant.id === props.activeRestaurant.id;
    isFavorite = props.favoriteIds.includes(restaurant.id);

    return (
      <RestaurantCard
        key={restaurant.id}
        restaurant={restaurant}
        isActiveRestaurant={isActiveRestaurant}
        updateActiveRestaurant={props.updateActiveRestaurant}
        isFavorite={isFavorite}
        updateFavoriteIds={props.updateFavoriteIds}
      />
    );
  });

  return (
    <div className="cardlist-container">
      <ul className="cardlist-list">{restaurants}</ul>
    </div>
  );
};

CardList.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
  activeRestaurant: PropTypes.shape({
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
  updateActiveRestaurant: PropTypes.func.isRequired,
  updateFavoriteIds: PropTypes.func,
  favoriteIds: PropTypes.arrayOf(PropTypes.string)
};

export default CardList;
