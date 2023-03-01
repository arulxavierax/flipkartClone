import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./cart/cart.reducer";
import { favouriteReducer } from "./favourite/favourite.reducer";
import { productsReducer } from "./products/products.reducer";
import { singleProductReducer } from "./singleProduct/singleProduct.reducer";
import { userReducer } from "./User/user.reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  singleProduct: singleProductReducer,
  auth: userReducer,
  favourite: favouriteReducer,
  cart: cartReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
