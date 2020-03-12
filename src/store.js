import { createStore, applyMiddleware } from "redux";

import reducer from "./reducers";

const stringMiddleware = store => dispatch => action => {
  if (typeof action === "string") {
    return dispatch({
      type: action
    });
  }

  return dispatch(action);
};

const store = createStore(reducer, applyMiddleware(stringMiddleware));

store.dispatch("TEST");

export default store;
