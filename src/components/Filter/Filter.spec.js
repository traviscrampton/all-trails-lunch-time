import React from "react";
import { mount } from "enzyme";
import Filter from "./Filter";
import FilterDropdown from "../FilterDropdown/FilterDropdown";

describe("Filter", () => {
  describe("Renders a filter in intial state", () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = {
        toggleSort: jest.fn(),
        sort: "asc"
      };
      wrapper = mount(<Filter {...props} />);
    });

    it("renders a Filter", () => {
      expect(wrapper.find(Filter)).toHaveLength(1);
    });

    it("renders a .filter-container", () => {
      expect(wrapper.find(".filter-container")).toHaveLength(1);
    });

    it("renders a .filter-button", () => {
      expect(wrapper.find(".filter-button")).toHaveLength(1);
    });

    it("filter button has copy of filter in this state", () => {
      expect(wrapper.find(".filter-button").text()).toEqual("Filter");
    });

    it("does not have a FilterDropdown", () => {
      expect(wrapper.find(FilterDropdown)).toHaveLength(0);
    });

    it("does not have an opac-cover", () => {
      expect(wrapper.find(".filter-opac-cover")).toHaveLength(0);
    });
  });

  describe("The Filter button is clicked", () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = {
        toggleSort: jest.fn(),
        sort: "asc"
      };
      wrapper = mount(<Filter {...props} />);
      wrapper.find(".filter-button").simulate("click");
    });

    it("has a FilterDropdown component", () => {
      expect(wrapper.find(FilterDropdown)).toHaveLength(1);
    });

    it("does have an opac-cover", () => {
      expect(wrapper.find(".filter-opac-cover")).toHaveLength(1);
    });

    it("filter button has copy of Sort", () => {
      expect(wrapper.find(".filter-button").text()).toEqual("Sort");
    });

    it("clicks on opac-cover returns state to isOpen = false", () => {
      wrapper.find(".filter-opac-cover").simulate("click");
      expect(wrapper.instance().state.isOpen).toEqual(false);
    });
  });
});
