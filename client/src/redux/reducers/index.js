import { combineReducers } from "redux";
import { registerReducer, loginReducer } from "./authReducer";

const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
});

export default rootReducer;
