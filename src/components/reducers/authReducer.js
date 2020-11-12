import {set_current_user, user_loading, set_user_role} from "../actions/definitions"; 

const isEmpty = require ('is-empty');

// in our reducer, we have to set our intial state for the tree. 
// in a way, this is pretty much our constructor. 
const initialState = { 
    isAuthenticated: false, 
    user: {}, 
    loading: false, 
    role: {}
}; 

export default function(state = initialState, action) { 
    // the reason why we need a switch statement here is to determine how the state should change
    // based on actions given. 
    switch(action.type){ 
        // case for when user logs in, we will acknowledge that we are authenticated and have recieved a payload. 
        case set_current_user: 
            return { 
                ...state, 
                isAuthenticated: !isEmpty(action.payload), 
                user: action.payload
            }; 
        // case for taking care of the loading of the user. 
        case user_loading: 
            return { 
                ...state, 
                loading:true
            };
        
        case set_user_role: 
            return { 
                ...state, 
                role:action.payload
            }
            
        default: 
            return state; 
    }
}