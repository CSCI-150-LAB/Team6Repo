const JwtStrategy = require("passport-jwt").Strategy; 
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");

require('../models/user.model'); 
const User = mongoose.model("User");

const keys = process.env.ATLAS_URI;


const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken('JWT');
opts.secretOrKey = 'secret'; 


module.exports = passport => {
  passport.use(
    
    new JwtStrategy(opts, (jwt_payload, done) => {


      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};

