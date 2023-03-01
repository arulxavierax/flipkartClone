import {
  GET_CART_ERROR,
  GET_CART_LOADING,
  GET_CART_SUCCESS,
} from "./cart.types";

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CART_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_CART_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_CART_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }

    default:
      return state;
  }
};
