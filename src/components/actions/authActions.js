import axios from "axios";
import jwt_decode from "jwt-decode"
import setAuthenticationToken from "../ultilities/setAuthenicatedToken";

import {get_errors, set_current_user, user_loading, set_user_role} from "./definitions"; 

// register action
export const registerUser = (userData, history) => dispatch => { 
    axios.post('http://localhost:5000/routes/users/register', userData)
    .then(res => history.push("/login")) // if successful register, send to login page
    .catch(err => dispatch({
        type: get_errors, 
        payload: err.payload.data
    }))
}

// login action
export const loginUser = userData => dispatch => {
    axios.post('http://localhost:5000/routes/users/login', userData) // login generates JWT
        .then(res => {

        // Save to localStorage and set token to localStorage. 
        const { token } = res.data;

        localStorage.setItem("jwtToken", token);
        setAuthenticationToken(token);            // Set token to Auth header
        const decoded = jwt_decode(token);        // Decode token to get user data.
        dispatch(setCurrentUser(decoded));        // Set current user
        dispatch(setUserRole(decoded));           // set role 
      })
      .catch(err =>
        dispatch({ type: get_errors, payload: err.response.data})
      );
  };

  // upload food image 
  export const image = newFoodItem  => { 
    axios.post('http://localhost:5000/fooditems/add', newFoodItem)
    .then(res => { 
      console.log(res.data); 
    })
          
    
  }

// set logged in user action
export const setCurrentUser = decoded => { 
    return{ 
        type:set_current_user, 
        payload: decoded
    };
};

// User loading
export const setUserLoading = () => {
    return {
      type: user_loading
    };
};

export const setUserRole = decoded => { 
    return { 
      type: set_user_role, 
      payload: decoded
    };
};




// log user out function
export const logoutUser = () => dispatch => {
    localStorage.removeItem("jwtToken");       // Remove token from local storage
    setAuthenticationToken(false);            // Remove auth header for future requests
    dispatch(setCurrentUser({}));            // Set user to empty object which will set isAuthenticated to false
};

