import React from "react";
import "./FavoriteHeart.css";
import PropTypes from "prop-types";
const classNames = require("classnames");

const FavoriteHeart = ({ isFavorite, updateFavoriteIds }) => {
  const icon = isFavorite ? "favorite" : "favorite_border";

  return (
    <button
      className={classNames("favorite-button", {
        isFavorite
      })}
      onClick={updateFavoriteIds}
    >
      <i className="material-icons heart">{icon}</i>
    </button>
  );
};

FavoriteHeart.propTypes = {
  updateFavoriteIds: PropTypes.func,
  isFavorite: PropTypes.bool
};

export default FavoriteHeart;
