import axios from "axios";
import {
  GET_ALLPRODUCTS_ERROR,
  GET_ALLPRODUCTS_LOADING,
  GET_ALLPRODUCTS_SUCCESS,
  GET_FILTERED_DATA,
  GET_SORTED_DATA,
} from "./products.type";

export const getAllProducts = (page) => (dispatch) => {
  dispatch({ type: GET_ALLPRODUCTS_LOADING });
  axios
    .get(`https://flipkartbackend-production.up.railway.app/products?limit=150`)
    .then((res) => {
      dispatch({
        type: GET_ALLPRODUCTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch({
        type: GET_ALLPRODUCTS_ERROR,
      });
    });
};

export const getFilteredData = (data, value) => (dispatch) => {
  const newData = data.filter((e) => e.category == value);
  dispatch({
    type: GET_FILTERED_DATA,
    payload: newData,
  });
};

export const getDefaultFilteredData = (data) => (dispatch) => {
  dispatch({
    type: GET_FILTERED_DATA,
    payload: data,
  });
};

export const getSortedData = (data) => (dispatch) => {
  dispatch({
    type: GET_SORTED_DATA,
    payload: data,
  });
};
