const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  // create an error object 
  let err = {};



 // To perform validation on the inputs, we need to initialize them as empty strings. 

  if(!isEmpty(data.name)){ data.name == data.name; }
        else { data.name ==  ""; }
  if(!isEmpty(data.email)){ data.email == data.email; }
        else { data.email ==  ""; }
  if(!isEmpty(data.password)){ data.password == data.password; }
        else { data.password ==  ""; }
  if(!isEmpty(data.password2)){ data.password2 == data.password2; }
        else { data.password2 ==  ""; }
  if(!isEmpty(data.role)){ data.role == data.role; }
        else { data.role ==  ""; }

 /*data.name = !isEmpty(data.name) ? data.name : "";
 data.email = !isEmpty(data.email) ? data.email : "";
 data.password = !isEmpty(data.password) ? data.password : "";
 data.password2 = !isEmpty(data.password2) ? data.password2 : "";
 */


// Validator function to check if name is empty
  if (Validator.isEmpty(data.name)) {
    err.name = "Name field is required";
  }

// Validator function to check if email is empty
  if (Validator.isEmpty(data.email)) {
    err.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    err.email = "Email is invalid";
  }

// Validator function to check if password is empty
  if (Validator.isEmpty(data.password)) {
    err.password = "Password field is required";
  }

// Have to input data to both password fields. 
if (Validator.isEmpty(data.password2)) {
    err.password2 = "Confirm password field is required";
  }
// makes sure the password meeting requirements
if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
    err.password = "Password must be at least 8 characters";
  }

// BOTH passwords have to be matching 
if (!Validator.equals(data.password, data.password2)) {
    err.password2 = "Passwords must match";
  }
  
  // User has to pick their role: Buyer or seller 
  if (Validator.isEmpty(data.role)) {
    err.role = "HEY YOU! PICK A ROLE :)";
  }

// these two variables are going to the be the variables that will be used in the users.js route. They will serve as a 
// a way to check if they inputs work or not. 
return {
    err,
    isValid: isEmpty(err)
  };
};