const express = require('express');
require('express-async-errors')
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const passport = require('passport')
const session = require('express-session');

require('dotenv').config();



const app = express();

const port = process.env.PORT || 5000; 

app.use(bodyParser.urlencoded({
  extended:false
})
);

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());


// middleware 
const users = require("./routes/users");
app.use(passport.initialize());
require('./config/passport');
app.use('/routes/users', users);

const adminRouter = require('./routes/admin');
const { ApiClient } = require('admin-bro');
app.use('/admin', adminRouter); 

const postRoute = require('./routes/posts'); 
app.use('/routes/posts', postRoute); 


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