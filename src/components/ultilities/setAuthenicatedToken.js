import axios from 'axios'; 

const setAuthenticationToken = token => { 
    if (token){
        // if there exists a token, we will apply an authorization token. 
        axios.defaults.headers.common["Authorization"] = token; 
    }
    else{ 
        delete axios.defaults.headers.common["Authorization"]; 
    }
};

export default setAuthenticationToken; 