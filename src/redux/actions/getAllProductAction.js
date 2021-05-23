import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "./actionType";

export function getAllProductRequest() {
  return {
    type: FETCH_DATA_REQUEST,
  };
}

export function getAllProductSuccess(products) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: products,
  };
}
export function getAllProductError(error) {
  return {
    type: FETCH_DATA_ERROR,
    payload: error,
  };
}
