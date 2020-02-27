import React from "react";
import { mount } from "enzyme";
import MobileToggleButton from "./MobileToggleButton";

describe("MobileToggleButton", () => {
  describe("Renders A MobileToggleButton", () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = {
        toggleIsMobileFullMap: jest.fn(),
        isMobileFullMap: true
      };
      wrapper = mount(<MobileToggleButton {...props} />);
    });

    it("renders a MobileToggleButton", () => {
      expect(wrapper.find(MobileToggleButton)).toHaveLength(1);
    });

    it("renders a ButtonCopy", () => {
      expect(wrapper.find("ButtonCopy")).toHaveLength(1);
    });

    it("renders a list icon", () => {
      expect(wrapper.find(".material-icons").text()).toEqual("list");
    });

    it("fires off the callback on click of the button", () => {
      wrapper.find("button").simulate("click");
      expect(props.toggleIsMobileFullMap).toBeCalled();
    });
  });
});
