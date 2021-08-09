const express = require("express");
const cors = require("cors");

const app = express();

//Read body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: "http://localhost:8081, credentials:true," }));


module.exports = app;
