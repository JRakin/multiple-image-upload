import {
  POST_DATA_ERROR,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS
} from "./actionType";

export function postDataRequest() {
  return {
    type: POST_DATA_REQUEST,
  };
}

export function postDataSuccess(message) {
  return {
    type: POST_DATA_SUCCESS,
    payload: message,
  };
}

export function postDataError(error) {
  return {
    type: POST_DATA_ERROR,
    payload: error,
  };
}
