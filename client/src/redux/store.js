// npm i react-redux redux
// npm i redux-devtools-extension
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middlewares = [thunk];

const useMiddlewares =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(...middlewares)
    : composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(rootReducer, useMiddlewares);

export default store;
