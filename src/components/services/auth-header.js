
/*
This function is a helper function that allows us to check the localstorage for the user. If there is a logged in user
with a JWT, then we will return the HTTP authorization header. If not, we will return a blank object. 
*/

export default function authHeader(){ 
    const user = JSON.parse(localStorage.getItem('user')); 


    if (user && user.accessToken){ 
        return { 'x-access-token': user.accessToken };
    }

    else { 
        return {}; 
    }
}