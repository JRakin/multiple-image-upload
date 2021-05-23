const initState = {
  loading: false,
  message: "",
  error: "",
};

function editProductReducer(state = initState, action) {
  switch (action.type) {
    case "EDIT_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "EDIT_PRODUCT_SUCCESS":
      return {
        loading: false,
        message: action.payload,
        error: "",
      };
    case "EDIT_PRODUCT_ERROR":
      return {
        loading: false,
        message: "",
        error: action.payload,
      };
    default:
      return state;
  }
}

export default editProductReducer;
