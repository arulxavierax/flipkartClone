import axios from "axios";
import { GET_SINGLEPRODUCT_ERROR, GET_SINGLEPRODUCT_LOADING, GET_SINGLEPRODUCT_SUCCESS } from "./singleProduct.types";


export const getSingleProduct = (id) => (dispatch) => {
  dispatch({ type: GET_SINGLEPRODUCT_LOADING });
  axios
    .get(`https://flipkartbackend-production.up.railway.app/products/${id}`)
    .then((res) => {
      dispatch({
        type: GET_SINGLEPRODUCT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch({ type: GET_SINGLEPRODUCT_ERROR });
    });
};
