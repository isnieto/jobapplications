const express = require("express");
const cors = require("cors");
//const jobsRoutes = require("./routes/jobs");
//const companiesRoutes = require("./routes/companies");

const app = express();

//Read body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: "http://localhost:8081, credentials:true," }));

// Routes
//app.use("/jobs", jobsRoutes);
//app.use("/companies", companiesRoutes);

module.exports = app;
