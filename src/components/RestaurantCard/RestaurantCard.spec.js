import React from "react";
import { mount } from "enzyme";
import RestaurantCard from "./RestaurantCard";
import StarRating from "../StarRating/StarRating";
import PriceLevel from "../PriceLevel/PriceLevel";
import FavoriteHeart from "../FavoriteHeart/FavoriteHeart";

describe("RestaurantCard", () => {
  describe("Renders RestaurantCard", () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = {
        restaurant: {
          id: "123",
          name: "Restaurant 1",
          placeUrl: "https://www.newplacegoogle.com",
          rating: 5,
          userRatingsTotal: 200,
          priceLevels: 2,
          photoUrl: "someURL",
          supportingText: "restaurant",
          latLng: {
            lat: 43,
            lng: 28
          }
        },
        isActiveRestaurant: false,
        updateActiveRestaurant: jest.fn(),
        isFavorite: false,
        updateFavoriteIds: jest.fn()
      };
      wrapper = mount(<RestaurantCard {...props} />);
    });

    it("renders a RestaurantCard", () => {
      expect(wrapper.find(RestaurantCard)).toHaveLength(1);
    });

    it("has class .restaurant-container", () => {
      expect(wrapper.find(".restaurant-container")).toHaveLength(1);
    });

    it("has class a.restaurant-link", () => {
      expect(wrapper.find("a.restaurant-link")).toHaveLength(1);
    });

    it("has class img.restaurant-image", () => {
      expect(wrapper.find("img.restaurant-image")).toHaveLength(1);
    });

    it("has class .restaurant-metadata", () => {
      expect(wrapper.find(".restaurant-metadata")).toHaveLength(1);
    });

    it("has class .restaurant-name", () => {
      expect(wrapper.find(".restaurant-name")).toHaveLength(1);
    });

    it("has a StarRating component", () => {
      expect(wrapper.find(StarRating)).toHaveLength(1);
    });

    it("has a PriceLevel component", () => {
      expect(wrapper.find(PriceLevel)).toHaveLength(1);
    });

    it("has a FavoriteHeart component", () => {
      expect(wrapper.find(FavoriteHeart)).toHaveLength(1);
    });

    it("restaurant  name is on restaurant card", () => {
      expect(wrapper.find(".restaurant-name").text()).toEqual(
        props.restaurant.name
      );
    });
  });

  describe("onhover event should fire updateActiveRestaurant", () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = {
        restaurant: {
          id: "123",
          name: "Restaurant 1",
          placeUrl: "https://www.newplacegoogle.com",
          rating: 5,
          userRatingsTotal: 200,
          priceLevels: 2,
          photoUrl: "someURL",
          supportingText: "restaurant",
          latLng: {
            lat: 43,
            lng: 28
          }
        },
        isActiveRestaurant: false,
        updateActiveRestaurant: jest.fn(),
        isFavorite: false,
        updateFavoriteIds: jest.fn()
      };
      wrapper = mount(<RestaurantCard {...props} />);
    });

    it("onmouseover fires proper function", () => {
      wrapper.simulate("mouseover");
      expect(props.updateActiveRestaurant).toBeCalled();
    });

    it("onmouseover fires with restaurant as params", () => {
      wrapper.simulate("mouseover");
      expect(props.updateActiveRestaurant).toBeCalledWith(props.restaurant);
    });

    it("calls on mouse out with an empty object", () => {
      wrapper.simulate("mouseout");
      expect(props.updateActiveRestaurant).toBeCalledWith({ id: null });
    });

    it("onmouseout calls updateActiveRestaurant on mouse leave", () => {
      wrapper.simulate("mouseover");
      wrapper.simulate("mouseout");
      expect(props.updateActiveRestaurant).toHaveBeenCalledTimes(2);
    });
  });
});
