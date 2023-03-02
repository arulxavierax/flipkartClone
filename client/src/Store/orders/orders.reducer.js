import {
  GET_ORDERS_ERROR,
  GET_ORDERS_LOADING,
  GET_ORDERS_SUCCESS,
} from "./orders.types";

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const ordersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ORDERS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_ORDERS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_ORDERS_SUCCESS: {
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
