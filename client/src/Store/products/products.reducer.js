import {
  GET_ALLPRODUCTS_ERROR,
  GET_ALLPRODUCTS_LOADING,
  GET_ALLPRODUCTS_SUCCESS,
} from "./products.type";

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALLPRODUCTS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_ALLPRODUCTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_ALLPRODUCTS_SUCCESS: {
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
