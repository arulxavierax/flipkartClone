import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./products/products.reducer";
import { singleProductReducer } from "./singleProduct/singleProduct.reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  singleProduct: singleProductReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
