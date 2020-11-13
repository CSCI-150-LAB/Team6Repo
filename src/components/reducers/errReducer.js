import { get_errors } from "../actions/definitions"; 

// this reducer takes care of the scenario in which one of our actions that we have are an error. 


const initialState = {};  // creates empty state

export default function(state = initialState, action) {
    // switch statement for error actions. 
    switch (action.type) {
      case get_errors:
        return action.payload;
      default:
        return state;
    }
  }

