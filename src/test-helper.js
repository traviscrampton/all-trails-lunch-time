export const setupGoogleMock = () => {
  /*** Mock Google Maps JavaScript API ***/
  const returnedRestaurantResult = [
    {
      place_id: "1",
      name: "In n Out",
      rating: 5,
      user_ratings_total: 5,
      price_level: 3,
      photos: null,
      types: ["restaurant"],
      geometry: {
        location: {
          lat: () => {
            return 34.5;
          },
          lng: () => {
            return 29.4;
          }
        }
      }
    }
  ];
  const google = {
    maps: {
      places: {
        AutocompleteService: () => {},
        PlacesServiceStatus: {
          INVALID_REQUEST: "INVALID_REQUEST",
          NOT_FOUND: "NOT_FOUND",
          OK: "OK",
          OVER_QUERY_LIMIT: "OVER_QUERY_LIMIT",
          REQUEST_DENIED: "REQUEST_DENIED",
          UNKNOWN_ERROR: "UNKNOWN_ERROR",
          ZERO_RESULTS: "ZERO_RESULTS"
        },
        PlacesService: () => {
          return {
            textSearch: (request, func) => {
              return func([], "OK");
            }
          };
        }
      },
      LatLng: () => {},
      Geocoder: () => {},
      Map: jest.fn(),
      GeocoderStatus: {
        ERROR: "ERROR",
        INVALID_REQUEST: "INVALID_REQUEST",
        OK: "OK",
        OVER_QUERY_LIMIT: "OVER_QUERY_LIMIT",
        REQUEST_DENIED: "REQUEST_DENIED",
        UNKNOWN_ERROR: "UNKNOWN_ERROR",
        ZERO_RESULTS: "ZERO_RESULTS"
      }
    }
  };
  global.window.google = google;
};
