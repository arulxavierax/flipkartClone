import axios from "axios";
import {
  GET_CART_ERROR,
  GET_CART_LOADING,
  GET_CART_SUCCESS,
} from "./cart.types";

let token = JSON.parse(localStorage.getItem("token"));
const config = {
  headers: {
    token: token,
  },
};

export const getCart = () => (dispatch) => {
  dispatch({ type: GET_CART_LOADING });
  axios
    .get("https://flipkartbackend-production.up.railway.app/cart", config)
    .then((res) => {
      dispatch({
        type: GET_CART_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch({ type: GET_CART_ERROR });
      console.log(e);
    });
};

export const updateCart = (id, quantity) => (dispatch) => {
  axios
    .post(
      "https://flipkartbackend-production.up.railway.app/cart",
      { product: id, quantity },
      config
    )
    .then((res) => {
      dispatch(getCart());
    })
    .catch((e) => {
      console.log(e);
    });
};

export const deleteCart = (id) => async (dispatch) => {
  try {
    let res = await axios.delete(
      `https://flipkartbackend-production.up.railway.app/cart/${id}`,
      config
    );
    dispatch(getCart());
    return res.data;
  } catch (e) {
    return e.response.data;
  }
};
