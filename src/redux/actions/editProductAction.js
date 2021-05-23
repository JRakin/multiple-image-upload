import {
  EDIT_PRODUCT_ERROR,
  EDIT_PRODUCT_REQUEST,
  EDIT_PRODUCT_SUCCESS,
} from "./actionType";

export function editProductRequest() {
  return {
    type:  EDIT_PRODUCT_REQUEST,
  };
}

export function editProductSuccess(message) {
  return {
    type:  EDIT_PRODUCT_SUCCESS,
    payload: message,
  };
}

export function editProductError(error) {
  return {
    type:  EDIT_PRODUCT_ERROR,
    payload: error,
  };
}
