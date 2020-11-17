import axios from "axios";
import {add_prices, add_to_cart, subtract_prices} from "./definitions"

// retrieve price 
export const getPrice = priceData => dispatch => { 
    axios.get('http://localhost:5000/routes/foodCart/price', priceData)
    .then (res => { 
        const { price } = res.data; 
        console.log(price)
        dispatch(addPrice(price)); // send a dispatch command with price input. 
    })
    .catch(err =>
        dispatch({ type: get_errors, payload: err.response.data})
      );
}; 



export const addPrice = (testPrice)  => { 
    return { 
        type: add_prices,
        testPrice
    };
};

export const subtractPrices = (testPrices) => { 
    return {
        type: subtract_prices, 
        testPrices
    };
};


export const addtoCart = (foodName) => { 
    return { 
        type: add_to_cart, 
        foodName
    };
};





