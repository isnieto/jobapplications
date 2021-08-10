const express = require("express");
const cors = require("cors");
const hbs = require('hbs');


const app = express();

//Read body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use(cors({ origin: "http://localhost:8081, credentials:true," }));

// Layout
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);


module.exports = app;
