const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./Routes/userRoutes'); 
const blogRoutes = require('./Routes/blogRoutes');
const app = express();
var cors = require('cors');
app.use(cors());



app.use(bodyParser.json());


   app.use('/users', userRoutes);
   
   app.use('/', blogRoutes);

   module.exports = app;


