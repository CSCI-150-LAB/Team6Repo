import axios from "axios"
const API = "http://localhost::5000/api/auth"

/*
    This class is meant to take care of our client side portion of our project for user login/registration. 
    We will use axios for HTTP requests and localstorage to hold the user info and JWTs 
*/
class authservice { 

    // post the email and password and save JWT to localstorage. 
    login(email, password){
        return axios.post(API + "login", {
            email, 
            password
        })
        .then(response => { 
            if (response.data.accessToken){ 
                localStorage.setItem("user", JSON.stringify(response.data)); 
            }
            return response.data; 
        })
    }

    // remove the JWT from localstorage
    logout(){ 
        localStorage.removeItem("user"); 
    }

    // posts the name, email and password 
    register(name, email,password){ 
        return axios.post(API + "register" , {
            name,
            email, 
            password
        }); 
    }

    getUser(){ 
        return JSON.parse(localStorage.getItem('user'));;
    }
}


export default new authservice(); 
