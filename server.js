const express = require('express');
const dotnev = require('dotenv');

// route files
const bootcamps = require('./routes/bootcamp');


// load config
dotnev.config({ path: './config.env' });

const app = express();

//mount routes
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server in ${process.env.NODE_ENV} on `));