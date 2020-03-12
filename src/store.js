import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers";

const stringMiddleware = store => dispatch => action => {
  if (typeof action === "string") {
    return dispatch({
      type: action
    });
  }

  return dispatch(action);
};

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, stringMiddleware)
);

const delayedActionCreator = timeout => dispatch => {
  setTimeout(
    () =>
      dispatch({
        type: "TEST_TIMEOUT"
      }),
    timeout
  );
};

store.dispatch("TEST");
store.dispatch(delayedActionCreator(2000));

export default store;
