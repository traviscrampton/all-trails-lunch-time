import React from "react";
import { mount } from "enzyme";
import FavoriteHeart from "../FavoriteHeart/FavoriteHeart";

describe("FavoriteHeart", () => {
  describe("Renders FavoriteHeart not isFavorite", () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = {
        updateFavoriteIds: jest.fn(),
        isFavorite: false
      };
      wrapper = mount(<FavoriteHeart {...props} />);
    });

    it("renders a FavoriteHeart", () => {
      expect(wrapper.find(FavoriteHeart)).toHaveLength(1);
    });

    it("renders a .favorite-button class", () => {
      expect(wrapper.find(".favorite-button")).toHaveLength(1);
    });

    it("renders a .material-icons.heart ", () => {
      expect(wrapper.find(".material-icons.heart")).toHaveLength(1);
    });

    it("does not render an .isFavorite class", () => {
      expect(wrapper.find(".isFavorite")).toHaveLength(0);
    });

    it("icon has name of favorite_border", () => {
      expect(wrapper.find(".material-icons.heart").text()).toEqual(
        "favorite_border"
      );
    });
  });

  describe("Renders FavoriteHeart as an isFavorite", () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = {
        updateFavoriteIds: jest.fn(),
        isFavorite: true
      };
      wrapper = mount(<FavoriteHeart {...props} />);
    });

    it("does render an .isFavorite class", () => {
      expect(wrapper.find(".isFavorite")).toHaveLength(1);
    });

    it("icon has name of favorite", () => {
      expect(wrapper.find(".material-icons.heart").text()).toEqual("favorite");
    });
  });

  describe("click interaction with button", () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = {
        updateFavoriteIds: jest.fn(),
        isFavorite: true
      };
      wrapper = mount(<FavoriteHeart {...props} />);
    });

    it("calls updateFavoriteIds on click", () => {
      wrapper.simulate("click");
      expect(props.updateFavoriteIds).toHaveBeenCalled();
    });
  });
});
