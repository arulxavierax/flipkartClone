import {
  GET_SINGLEPRODUCT_ERROR,
  GET_SINGLEPRODUCT_LOADING,
  GET_SINGLEPRODUCT_SUCCESS,
} from "./singleProduct.reducer";

const initialState = {
  loading: true,
  error: false,
  data: {},
};

export const singleProductReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_SINGLEPRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_SINGLEPRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_SINGLEPRODUCT_SUCCESS: {
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
