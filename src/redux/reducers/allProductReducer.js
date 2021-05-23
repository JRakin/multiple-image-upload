const initState = {
  loading: false,
  products: [],
  error: null,
};

function allProductReducer(state = initState, action) {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case "FETCH_DATA_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default allProductReducer;
