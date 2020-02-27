import React from "react";
import { mount } from "enzyme";
import PriceLevel from "./PriceLevel";

describe("PriceLevel", () => {
  describe("Renders A PriceLevel with a pricelevel over 0", () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = {
        priceLevel: 3,
        supportingText: "Restaurant"
      };
      wrapper = mount(<PriceLevel {...props} />);
    });

    it("renders out a PriceLevel component", () => {
      expect(wrapper.find(PriceLevel)).toHaveLength(1);
    });

    it("renders out price-level-container", () => {
      expect(wrapper.find(".price-level-container")).toHaveLength(1);
    });

    it("renders out the right number of dollar signs", () => {
      expect(wrapper.find(".dollar-signs").text()).toEqual("$$$ ");
    });

    it("renders out the right supporting text", () => {
      expect(wrapper.find(".supporting-text").text()).toEqual(
        props.supportingText
      );
    });
  });

  describe("Renders A PriceLevel with a pricelevel equal 0", () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = {
        priceLevel: 0,
        supportingText: "Boba"
      };
      wrapper = mount(<PriceLevel {...props} />);
    });

    it("renders out a PriceLevel component", () => {
      expect(wrapper.find(PriceLevel)).toHaveLength(1);
    });

    it("renders out the right number of dollar signs", () => {
      expect(wrapper.find(".dollar-signs").text()).toEqual("$ ");
    });

    it("renders out the right supporting text", () => {
      expect(wrapper.find(".supporting-text").text()).toEqual(
        props.supportingText
      );
    });
  });
});
