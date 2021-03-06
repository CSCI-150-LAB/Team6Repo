const express = require('express');
require('express-async-errors')
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const passport = require('passport')
const morgan = require("morgan"); 
const paypal = require("paypal-rest-sdk"); 

require('dotenv').config();



const app = express();

const port = process.env.PORT || 5000; 


app.use(cors());
app.use(express.json());

//Image Upload
app.use(morgan("dev"));
app.use('/fooditems', express.static('uploads'));



app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// middleware 
const users = require("./routes/users");
app.use(passport.initialize());
require('./config/passport');
app.use('/routes/users', users);

const adminRouter = require('./routes/admin');
app.use('/admin', adminRouter); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const postRoute = require('./routes/posts'); 
app.use('/routes/posts', postRoute); 

const fooditemRouter = require('./routes/fooditem');
app.use('/fooditems',fooditemRouter);

const foodSearchRouter = require('./routes/food_search');
app.use('/searchfood', foodSearchRouter);

const foodcartRouter = require('./routes/foodCart'); 
app.use('/foodcart', foodcartRouter); 

//cloudinary
const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET 
});


// mongoDB connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false});
  
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//admin page localhost::5000/admin to access. 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
app.listen(5080, () => console.log('AdminBro is under localhost:5080/admin'));