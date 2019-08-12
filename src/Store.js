import { createStore, applyMiddleware, combineReducers } from "redux";
import { logger } from "redux-logger";
import TodoReducer from "./TodoReducer";
export default createStore(
  combineReducers({ TodoReducer }),
  1,
  applyMiddleware(logger)
);
