import axios from "axios";
import {
  GET_ORDERS_ERROR,
  GET_ORDERS_LOADING,
  GET_ORDERS_SUCCESS,
} from "./orders.types";

let token = JSON.parse(localStorage.getItem("token"));
const config = {
  headers: {
    token: token,
  },
};

export const getOrders = () => (dispatch) => {
  dispatch({ type: GET_ORDERS_LOADING });
  axios
    .get("https://flipkartbackend-production.up.railway.app/orders", config)
    .then((res) => {
      dispatch({
        type: GET_ORDERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch({ type: GET_ORDERS_ERROR });
      console.log(e);
    });
};
