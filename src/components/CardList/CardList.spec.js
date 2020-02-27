import React from "react";
import { mount } from "enzyme";
import CardList from "./CardList";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

describe("CardList", () => {
  describe("Renders an Empty list", () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = {
        restaurants: [],
        updateActiveRestaurant: jest.fn(),
        favoriteIds: [],
        updateFavoriteIds: jest.fn()
      };
      wrapper = mount(<CardList {...props} />);
    });

    it("renders the cardlist-container", () => {
      expect(wrapper.find(".cardlist-container")).toHaveLength(1);
    });

    it("renders the unordered list", () => {
      expect(wrapper.find(".cardlist-list")).toHaveLength(1);
    });

    it("doesn't render any RestaurantCard (s)", () => {
      expect(wrapper.find(RestaurantCard)).toHaveLength(0);
    });
  });

  describe("Renders a list with two Restaurants", () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = {
        restaurants: [
          {
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
          {
            id: "1f423",
            name: "Mexican Restaurant",
            placeUrl: "https://www.nefffwplacegoogle.com",
            rating: 3,
            userRatingsTotal: 208,
            priceLevels: 5,
            photoUrl: "somffURL",
            supportingText: "breakfast",
            latLng: {
              lat: 43,
              lng: 28
            }
          }
        ],
        favoriteIds: [],
        updateActiveRestaurant: jest.fn(),
        updateFavoriteIds: jest.fn()
      };
      wrapper = mount(
        <CardList restaurants={[]} updateActiveRestaurant={jest.fn} />
      );

      it("renders the cardlist-container", () => {
        expect(wrapper.find(".cardlist-container")).toHaveLength(1);
      });

      it("renders the unordered list", () => {
        expect(wrapper.find(".cardlist-list")).toHaveLength(1);
      });

      it("has two instances of RestaurantCard", () => {
        expect(wrapper.find(RestaurantCard)).toHaveLength(2);
      });
    });
  });
});
