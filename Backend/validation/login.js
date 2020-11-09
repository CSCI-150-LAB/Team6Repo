const Validator = require("validator");
const isEmpty = require("is-empty");


module.exports = function validateLoginInput(data) {
  let err = {};


// Convert empty fields to an empty string so we can use validator functions
/*
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
*/

  if(!isEmpty(data.email)){ data.email == data.email; }
        else { data.email ==  ""; }
  if(!isEmpty(data.password)){ data.password == data.password; }
        else { data.email ==  ""; }


// Validator function to check if email is empty or invalid
  if (Validator.isEmpty(data.email)) {
    err.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    err.email = "Email is invalid";
  }

// Validator function to check if password is empty. 
  if (Validator.isEmpty(data.password)) {
    err.password = "Password field is required";
  }


return {
    err,
    isValid: isEmpty(err)
  };
};