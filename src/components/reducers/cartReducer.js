import { add_prices, add_to_cart, subtract_prices } from "../actions/definitions"; 

// this reducer takes care of cart functionality 


const initialState = {  // creates empty state
    shoppingList: [],
    price: 0,
};  

export default function(state = initialState, action) {
    // switch statement for error actions. 
    switch (action.type) {
      case add_prices:
        console.log(action.payload)
        return { 
          ...state, 
          price: state.price + state.payload
        }

        case add_to_cart: 
        console.log(action.payload)
        return { 
          ...state, 
        }

       case subtract_prices: 
       console.log(action.paylaod)
       return { 
         ...state, 
       }
      default:
        return state;
    }
  }

