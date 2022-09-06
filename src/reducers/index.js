import { combineReducers } from "redux";
import user from "./user";
import currencies from "./currencies";

const rootReducer = combineReducers({
  user,
  currencies,
});

export default rootReducer;
