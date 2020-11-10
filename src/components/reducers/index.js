import authReducer from "./authReducer";
import errReducer from "./errReducer";
import { combineReducers } from "redux";


// this reducer utilizes the combine reducers function from redux to combine our auth and error reducer into one 
// root reducer

export default combineReducers({ 
    auth: authReducer, 
    errors: errReducer
})