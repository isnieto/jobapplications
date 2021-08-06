const app = require("./app/app.js")
const { PORT } = require("./app/config/index");


// Load routes
const jobsRouter = require('./app/routes/jobs.routes');
app.use('/jobs', jobsRouter);


//require("./auth.routes.js")(app);
//require("./jobsearch.routes.js")(app);

app.listen(PORT, ()=> {
    console.log(`Server started and running on port: ${PORT}`)
})