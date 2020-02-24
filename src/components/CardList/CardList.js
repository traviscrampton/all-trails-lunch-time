import React, { Component } from "react";
import "./CardList.css";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

const CardList = props => {
  const restaurants = props.restaurants.map(restaurant => {
    return <RestaurantCard {...restaurant} />;
  });

  return (
    <div className="cardlist-container">
      <ul className="cardlist-list">{restaurants}</ul>
    </div>
  );
};

export default CardList;
