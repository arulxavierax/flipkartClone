import {
  GET_FAVOURITE_ERROR,
  GET_FAVOURITE_LOADING,
  GET_FAVOURITE_SUCCESS,
} from "./favourite.types";

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const favouriteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_FAVOURITE_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_FAVOURITE_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_FAVOURITE_SUCCESS: {
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
