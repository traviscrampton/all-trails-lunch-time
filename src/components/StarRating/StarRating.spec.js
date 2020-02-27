import React from "react";
import { mount } from "enzyme";
import StarRating from "./StarRating";

describe("StarRating", () => {
  describe("Renders A StarRating with a StarRating over 0", () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = {
        rating: 3,
        userRatingsTotal: 155
      };
      wrapper = mount(<StarRating {...props} />);
    });

    it("renders out a StarRating component", () => {
      expect(wrapper.find(StarRating)).toHaveLength(1);
    });

    it("renders out star-rating-container", () => {
      expect(wrapper.find(".star-rating-container")).toHaveLength(1);
    });

    it("renders out a Stars component", () => {
      expect(wrapper.find("Stars")).toHaveLength(1);
    });

    it("renders out 5 Star components", () => {
      expect(wrapper.find("Star")).toHaveLength(5);
    });

    it("prints out the right userRatingsTotal", () => {
      expect(wrapper.find(".user-rating-count").text()).toEqual(
        `(${props.userRatingsTotal})`
      );
    });
  });
});
