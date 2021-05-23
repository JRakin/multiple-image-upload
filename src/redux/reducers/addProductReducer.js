  
const initState = {
    loading: false,
    message: '',
    error: '',
  };
  
  function addProductReducer(state = initState, action) {
    switch (action.type) {
      case 'POST_DATA_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'POST_DATA_SUCCESS':
        return {
          loading: false,
          message: action.payload,
          error: '',
        };
      case 'POST_DATA_ERROR':
        return {
          loading: false,
          message: '',
          error: action.payload,
        };
      default:
        return state;
    }
  }
  
  export default addProductReducer;