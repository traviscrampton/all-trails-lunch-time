import React from "react";
import { mount } from "enzyme";
import Header from "./Header";
import Filter from "../Filter/Filter";
import SearchBar from "../SearchBar/SearchBar";

describe("Header", () => {
  describe("Renders A Header", () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = {
        toggleSort: jest.fn,
        sort: "asc",
        handleSearchSubmit: jest.fn,
        handleTextChange: jest.fn,
        searchText: ""
      };
      wrapper = mount(<Header {...props} />);
    });

    it("renders out the Header component", () => {
      expect(wrapper.find(Header)).toHaveLength(1);
    });

    it("renders out a header_container", () => {
      expect(wrapper.find(".header-container")).toHaveLength(1);
    });

    it("renders out an image", () => {
      expect(wrapper.find("img")).toHaveLength(1);
    });

    it("renders out header-filter-searchbar", () => {
      expect(wrapper.find(".header-filter-searchbar")).toHaveLength(1);
    });

    it("renders out a Filter component", () => {
      expect(wrapper.find(Filter)).toHaveLength(1);
    });

    it("renders out a SearchBar component", () => {
      expect(wrapper.find(SearchBar)).toHaveLength(1);
    });
  });
});
