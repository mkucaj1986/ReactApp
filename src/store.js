import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import axiosMiddleware from "redux-axios-middleware";
import axiosClient from "./helpers/axios-client";

import getData from "./reducers/getData";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        {
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }
      )
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(logger(), thunk, promise(), axiosMiddleware(axiosClient))
);

export default createStore(
  combineReducers({
    getData
  }),
  {},
  enhancer
);
