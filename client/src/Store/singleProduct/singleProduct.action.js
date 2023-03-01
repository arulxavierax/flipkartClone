import axios from "axios";
import {
  GET_SINGLEPRODUCT_ERROR,
  GET_SINGLEPRODUCT_LOADING,
  GET_SINGLEPRODUCT_SUCCESS,
} from "./singleProduct.types";

let token = JSON.parse(localStorage.getItem("token"));
const config = {
  headers: {
    token: token,
  },
};

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

export const productAddCart = (id) => async (dispatch) => {
  try {
    let response = await axios.post(
      "https://flipkartbackend-production.up.railway.app/cart",
      {
        product: id,
        quantity: 1,
      },
      config
    );
    if (response.status == 200) {
      return "Product added to cart";
    }
  } catch (e) {
    return e.response.data;
  }
};

export const productAddFavourite = (id) => async (dispatch) => {
  try {
    let response = await axios.post(
      "https://flipkartbackend-production.up.railway.app/favourite",
      {
        product: id,
        quantity: 1,
      },
      config
    );
    if (response.status == 200) {
      return "Product added to Favourite";
    }
  } catch (e) {
    return e.response.data;
  }
};
