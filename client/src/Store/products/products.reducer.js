import {
  GET_ALLPRODUCTS_ERROR,
  GET_ALLPRODUCTS_LOADING,
  GET_ALLPRODUCTS_SUCCESS,
  GET_FILTERED_DATA,
  GET_SORTED_DATA,
} from "./products.type";

const initialState = {
  loading: false,
  error: false,
  data: [],
  filteredData: [],
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
        filteredData: payload,
      };
    }
    case GET_FILTERED_DATA: {
      return {
        ...state,
        loading: false,
        error: false,
        filteredData: payload,
      };
    }
    case GET_SORTED_DATA: {
      return {
        ...state,
        loading: false,
        error: false,
        filteredData: payload,
      };
    }
    default:
      return state;
  }
};
