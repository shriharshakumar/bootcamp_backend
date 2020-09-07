const express = require('express');
const dotnev = require('dotenv');

// load config
dotnev.config({ path: './config.env' });

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server in ${process.env.NODE_ENV} on `));