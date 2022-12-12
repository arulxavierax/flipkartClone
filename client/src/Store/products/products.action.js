import axios from "axios";
import {
  GET_ALLPRODUCTS_ERROR,
  GET_ALLPRODUCTS_LOADING,
  GET_ALLPRODUCTS_SUCCESS,
} from "./products.type";

export const getAllProducts = () => (dispatch) => {
  dispatch({ type: GET_ALLPRODUCTS_LOADING });
  axios
    .get("https://flipkartbackend-production.up.railway.app/products?limit=100")
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
