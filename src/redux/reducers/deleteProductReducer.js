const initState = {
  loading: false,
  message: "",
  error: "",
};

function deleteProductReducer(state = initState, action) {
  switch (action.type) {
    case "DELETE_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_PRODUCT_SUCCESS":
      return {
        loading: false,
        message: action.payload,
        error: "",
      };
    case "DELETE_PRODUCT_ERROR":
      return {
        loading: false,
        message: "",
        error: action.payload,
      };
    default:
      return state;
  }
}

export default deleteProductReducer;
