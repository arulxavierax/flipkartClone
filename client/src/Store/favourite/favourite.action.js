import axios from "axios";
import {
  GET_FAVOURITE_ERROR,
  GET_FAVOURITE_LOADING,
  GET_FAVOURITE_SUCCESS,
} from "./favourite.types";

let token = JSON.parse(localStorage.getItem("token"));
const config = {
  headers: {
    token: token,
  },
};

export const getFavourite = () => (dispatch) => {
  dispatch({ type: GET_FAVOURITE_LOADING });
  axios
    .get("https://flipkartbackend-production.up.railway.app/favourite", config)
    .then((res) => {
      dispatch({
        type: GET_FAVOURITE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch({ type: GET_FAVOURITE_ERROR });
      console.log(e);
    });
};

export const deleteFavourite = (id) => async (dispatch) => {
  try {
    let res = await axios.delete(
      `https://flipkartbackend-production.up.railway.app/favourite/${id}`,
      config
    );
    dispatch(getFavourite());
    return res.data;
  } catch (e) {
    return e.response.data;
  }
};
