import axios from "axios";

import {
  postDataError,
  postDataRequest,
  postDataSuccess,
} from "./addProductAction";

import {
  getAllProductError,
  getAllProductRequest,
  getAllProductSuccess,
} from "./getAllProductAction";

import {
  deleteDataError,
  deleteDataRequest,
  deleteDataSuccess,
} from "./deleteProductAction";

import {
    editProductRequest,
    editProductError,
    editProductSuccess
} from './editProductAction'

export function postAddProduct(data) {
  console.log(data);
  return (dispatch) => {
    dispatch(postDataRequest());
    axios
      .post("http://localhost:5000/addProduct", data)
      .then((response) => {
        if (response.data) {
          // console.log(response);
          dispatch(postDataSuccess("created successfully"));
        }
      })
      .catch((error) => {
        dispatch(postDataError(error?.message));
      });
  };
}

export function getAllProducts() {
  return (dispatch) => {
    dispatch(getAllProductRequest());
    axios
      .get("http://localhost:5000/getAll")
      .then((response) => {
        console.log(response.data);
        dispatch(getAllProductSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getAllProductError(error.message));
      });
  };
}

export function deleteProduct(data) {
    console.log("data", data);
    return (dispatch) => {
      dispatch(deleteDataRequest());
      axios
        .delete("http://localhost:5000/deleteProduct/"+data)
        .then((response) => {
          if (response.data) {
            // console.log(response);
            dispatch(deleteDataSuccess("Deleted successfully"));
          }
        })
        .catch((error) => {
          dispatch(deleteDataError(error?.message));
        });
    };
  }
  
  export function editProduct(data, id) {
    console.log("data", data);
    return (dispatch) => {
      dispatch(editProductRequest());
      axios
        .patch("http://localhost:5000/editProduct/"+id, data)
        .then((response) => {
          if (response.data) {
            // console.log(response);
            dispatch(editProductSuccess("Deleted successfully"));
          }
        })
        .catch((error) => {
          dispatch(editProductError(error?.message));
        });
    };
  }
  