import React from "react";
import { mount } from "enzyme";
import SearchBar from "./SearchBar";
import { setupGoogleMock } from "../../test-helper.js";

describe("SearchBar", () => {
  beforeAll(() => {
    setupGoogleMock();
  });

  describe("Renders the SearchBar", () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = {
        handleSearchSubmit: jest.fn(),
        handleTextChange: jest.fn(),
        searchText: "japanese food"
      };
      wrapper = mount(<SearchBar {...props} />);
    });

    it("Renders teh SearchBar Component", () => {
      expect(wrapper.find(SearchBar)).toHaveLength(1);
    });

    it("has a form.searchbar-container", () => {
      expect(wrapper.find("form.searchbar-container")).toHaveLength(1);
    });

    it("has a button searchbar-button", () => {
      expect(wrapper.find(".searchbar-button")).toHaveLength(1);
    });

    it("has a material-icons search icon", () => {
      expect(wrapper.find(".material-icons.search")).toHaveLength(1);
    });
  });

  describe("search submission", () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = {
        handleSearchSubmit: jest.fn(),
        handleTextChange: jest.fn(),
        searchText: "japanese food"
      };
      wrapper = mount(<SearchBar {...props} />);
    });
    it("submits the search result", () => {
      const form = wrapper.find("form").simulate("submit");
      expect(props.handleSearchSubmit).toBeCalled();
    });
  });
});
