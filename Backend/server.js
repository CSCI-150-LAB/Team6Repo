const express = require('express');
require('express-async-errors')
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 


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

const usersRouter = require('./routes/users');
const sellersRouter = require('./routes/sellers'); 
const adminRouter = require('./routes/admin');

app.use('/users', usersRouter);
app.use('/sellers', sellersRouter); 
app.use('/admin', adminRouter); 

//admin page localhost::5000/admin to access. 

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
app.listen(5080, () => console.log('AdminBro is under localhost:5080/admin'));