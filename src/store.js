//Create directories for actions and reducers,

import { createStore, applyMiddleware, compose } from "redux";

// thunk allows us to write action creators that return a function instead of a action
import thunk from "redux-thunk";
const initialState = {};
const middleware = [thunk];


const store = createStore(
  () => [],
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;