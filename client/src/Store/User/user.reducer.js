import { useLoaderData } from "react-router-dom";
import {
  USER_LOGIN_ERROR,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
} from "./user.types";
import { loadData, saveData } from "./localstorage";

const initialState = {
  token: loadData("token"),
  loading: false,
  error: false,
  sign: false,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case USER_LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case USER_LOGIN_SUCCESS: {
      const token = payload.token;
      saveData("token", token);
      return {
        ...state,
        loading: false,
        error: false,
        token: token,
        sign: true,
      };
    }
    default:
      return state;
  }
};
