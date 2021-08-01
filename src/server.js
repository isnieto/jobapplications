const app = require("./app/app.js")
const { PORT } = require("./app/config/index");
const jobs = require('./app/routes/jobs.routes');


// ...
app.use('/jobs', jobs);

// Load routes
//require("./auth.routes.js")(app);
//require("./jobsearch.routes.js")(app);

app.listen(PORT, ()=> {
    console.log(`Server started and running on port: ${PORT}`)
})