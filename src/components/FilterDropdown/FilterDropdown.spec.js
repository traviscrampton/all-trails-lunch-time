import React from "react";
import { mount } from "enzyme";
import FilterDropdown from "./FilterDropdown";

describe("FilterDropdown", () => {
  describe("Renders the FilterDropdown", () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = {
        toggleSort: jest.fn(),
        sort: "asc"
      };
      wrapper = mount(<FilterDropdown {...props} />);
    });

    it("renders the FilterDropdown", () => {
      expect(wrapper.find(FilterDropdown)).toHaveLength(1);
    });

    it("renders the container class", () => {
      expect(wrapper.find(".filter-dropdown-container")).toHaveLength(1);
    });

    it("renders two label containers", () => {
      expect(wrapper.find("label.label-container")).toHaveLength(2);
    });

    it("renders twwo checkmark classes", () => {
      expect(wrapper.find(".checkmark")).toHaveLength(2);
    });

    it("renders two material-icons", () => {
      expect(wrapper.find(".material-icons")).toHaveLength(2);
    });

    it("renders two radio buttons", () => {
      expect(wrapper.find("input[type='radio']")).toHaveLength(2);
    });

    it("renders one submit button", () => {
      expect(wrapper.find("input[type='submit']")).toHaveLength(1);
    });
  });

  describe("interactions with the FilterDropdown", () => {
    let wrapper;
    let props;
    let descRadioButton;
    beforeEach(() => {
      props = {
        toggleSort: jest.fn(),
        sort: "asc"
      };
      wrapper = mount(<FilterDropdown {...props} />);
    });

    it("toggles the radiobutton", () => {
      descRadioButton = wrapper.find(".desc");
      descRadioButton.simulate("change");
      expect(wrapper.instance().state.sort).toEqual("desc");
    });

    it("submits the form with the state", () => {
      const form = wrapper.find("form");
      form.simulate("submit");
      expect(props.toggleSort).toBeCalledWith("asc");
    });
  });
});
