import { createStore, applyMiddleware } from "redux";

// thunk is the mddleware that lets us call action creators that return a function instead of an object. 
import thunk from "redux-thunk";
import rootReducer from "../reducers"; 



const initialState = {};
const middleware = [thunk]; 

// createStore() is a function that allows us to create the complete state tree out our application. 
const store = createStore(
  rootReducer, 
  initialState,                 
  applyMiddleware(...middleware),
);
export default store;