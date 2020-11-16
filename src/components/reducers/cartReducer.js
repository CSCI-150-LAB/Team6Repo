import { get_errors } from "../actions/definitions"; 

// this reducer takes care of cart functionality 


const initialState = {  // creates empty state
    list: [],
    price: 0,
};  

export default function(state = initialState, action) {
    // switch statement for error actions. 
    switch (action.type) {
      case get_errors:
        return action.payload;
      default:
        return state;
    }
  }

