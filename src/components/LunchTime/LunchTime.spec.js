import React from "react";
import { mount } from "enzyme";
import LunchTime from "./LunchTime";
import Header from "../Header/Header";
import CardList from "../CardList/CardList";
import MapContainer from "../MapContainer/MapContainer";
import { setupGoogleMock } from "../../test-helper.js";

describe("LunchTime", () => {
  beforeAll(() => {
    setupGoogleMock();
  });

  describe("render LunchTime", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<LunchTime />);
    });

    it("renders the app-container", () => {
      expect(wrapper.find(".app-container")).toHaveLength(1);
    });

    it("renders the app-body", () => {
      expect(wrapper.find(".app-body")).toHaveLength(1);
    });

    it("renders the Header component", () => {
      expect(wrapper.find(Header)).toHaveLength(1);
    });

    it("renders the CardList component", () => {
      expect(wrapper.find(CardList)).toHaveLength(1);
    });

    it("renders the MapContainer component", () => {
      expect(wrapper.find(MapContainer)).toHaveLength(1);
    });
  });
});
