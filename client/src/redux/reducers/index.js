import { combineReducers } from "redux";
import { registerReducer, loginReducer, getUserReducer } from "./authReducer";

const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  friend: getUserReducer,
});

export default rootReducer;
