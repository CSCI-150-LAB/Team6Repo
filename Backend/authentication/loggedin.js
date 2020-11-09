const express = require('express'); 
const passport = require('passport'); 
const User = require('../models/user.model');


module.export = function userisLoggedin(req, res, next){  
    if (req.user){ 
        next(); 
    }
    else { 
        res.redirect('/login'); 
    }

}