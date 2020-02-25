import React, { Component } from "react";
import "./CardList.css";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

const CardList = props => {
  let isActiveRestaurant;
  const restaurants = props.restaurants.map(restaurant => {
    isActiveRestaurant = restaurant.id === props.activeRestaurant.id;

    return (
      <RestaurantCard
        key={restaurant.id}
        restaurant={restaurant}
        isActiveRestaurant={isActiveRestaurant}
        updateActiveRestaurant={props.updateActiveRestaurant}
      />
    );
  });

  return (
    <div className="cardlist-container">
      <ul className="cardlist-list">{restaurants}</ul>
    </div>
  );
};

export default CardList;
