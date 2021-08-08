const app = require("./app/app.js")
const { PORT } = require("./app/config/index");


// Load routes
// Routes for job applications
const jobsRouter = require('./app/routes/jobs');
app.use('/jobs', jobsRouter);
// Routes for companies
const companiesRoutes = require('./app/routes/companies');
app.use('/companies', companiesRoutes);


app.listen(PORT, ()=> {
    console.log(`Server started and running on port: ${PORT}`)
})