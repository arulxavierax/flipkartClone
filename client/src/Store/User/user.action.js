import axios from "axios";
import {
  USER_LOGIN_ERROR,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
} from "./user.types";

export const userLogin = (data) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_LOADING });
  try {
    let res = await axios.post(
      "https://flipkartbackend-production.up.railway.app/user/signin",
      data
    );
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.data,
    });
    return res.data.message;
  } catch (e) {
    dispatch({
      type: USER_LOGIN_ERROR,
    });
    return e.response.data;
  }
};

export const userRegister = (data) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_LOADING });
  try {
    let res = await axios.post(
      "https://flipkartbackend-production.up.railway.app/user/signup",
      data
    );
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.data,
    });
    return res.data.message;
  } catch (e) {
    dispatch({
      type: USER_LOGIN_ERROR,
    });
    return e.response.data;
  }
};
