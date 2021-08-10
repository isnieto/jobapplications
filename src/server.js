const app = require("./app/app.js");
const { PORT } = require("./app/config/index");
//const hbs = require('hbs');

// Routes for job applications
const jobsRouter = require("./app/routes/applications");
app.use("/applications", jobsRouter);
// Routes for companies
const companiesRoutes = require("./app/routes/companies");
app.use("/companies", companiesRoutes);


// Layout
//app.set('view engine', 'hbs');

app.listen(PORT, () => {
  console.log(`Server started and running on port: ${PORT}`);
});
