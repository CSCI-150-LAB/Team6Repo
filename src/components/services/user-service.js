import axios from 'axios';
import authHeader from './auth-header';

const API = "http://localhost::5000/api/auth"


/*
This class was created for the purpose of accessing the data. 
*/

class userService { 
    getPublicContent() { 
        return axios.get(API + 'all'); 
    }

    getUserBoard() {
        return axios.get(API + 'user', { headers: authHeader() });
      }
    
      getModeratorBoard() {
        return axios.get(API + 'mod', { headers: authHeader() });
      }
    
      getAdminBoard() {
        return axios.get(API + 'admin', { headers: authHeader() });
      }
    }
    
    export default new userService();
