import React from "react";
import { mount } from "enzyme";
import MapContainer from "./MapContainer";
import { setupGoogleMock } from "../../test-helper.js";

describe("SearchBar", () => {
  beforeAll(() => {
    setupGoogleMock();
  });

  describe("Renders the MapContainer", () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = {
        restaurants: [],
        activeRestaurant: {},
        newSearch: false,
        toggleNewSearchFalse: jest.fn(),
        updateActiveRestaurant: jest.fn()
      };
      wrapper = mount(<MapContainer {...props} />);
    });

    it("renders the MapContainer", () => {
      expect(wrapper.find(MapContainer)).toHaveLength(1);
    });

    it("renders the #map-container", () => {
      expect(wrapper.find("#map-container")).toHaveLength(1);
    });

    it("calls the global google.maps.Map", () => {
      expect(global.window.google.maps.Map).toBeCalledWith(
        wrapper.instance().mapContainer.current,
        {
          center: { lat: 37.7908279, lng: -122.4082753 },
          zoom: 14
        }
      );
    });
  });
});
