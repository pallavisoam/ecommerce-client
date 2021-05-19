import { userReducer } from "./userReducer.js";
import { combineReducers } from "redux";
import { searchReducer } from "./searchReducer.js";
import { cartReducer } from "./cartReducer.js";
import { drawerReducer } from "./drawerReducer.js";
import { couponReducer } from "./couponReducer.js";
import { CODReducer } from "./CODReducer.js";

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  cart: cartReducer,
  drawer: drawerReducer,
  coupon: couponReducer,
  COD: CODReducer,
});
export default rootReducer;
