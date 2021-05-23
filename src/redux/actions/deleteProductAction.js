import {
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
} from "./actionType";

export function deleteDataRequest() {
  return {
    type: DELETE_PRODUCT_REQUEST,
  };
}

export function deleteDataSuccess(message) {
  return {
    type: DELETE_PRODUCT_SUCCESS,
    payload: message,
  };
}

export function deleteDataError(error) {
  return {
    type: DELETE_PRODUCT_ERROR,
    payload: error,
  };
}
