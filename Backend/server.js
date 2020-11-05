const express = require('express');
require('express-async-errors')
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require("morgan");
const bodyParser = require('body-parser'); 
const fs = require('fs');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.use(morgan("dev"));
app.use('/fooditems', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

const usersRouter = require('./routes/users');
const sellersRouter = require('./routes/sellers'); 
const adminRouter = require('./routes/admin');
const fooditemRouter = require('./routes/fooditem');
const foodreviewRouter = require('./routes/foodreview');

app.use('/users', usersRouter);
app.use('/sellers', sellersRouter); 
app.use('/admin', adminRouter); 
app.use('/fooditems',fooditemRouter );
app.use('/foodreviews', foodreviewRouter);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});
mongoose.Promise = global.Promise;

//admin page localhost::5000/admin to access. 

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
app.listen(5080, () => console.log('AdminBro is under localhost:5080/admin'));