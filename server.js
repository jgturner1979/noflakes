require("dotenv").config();
const express = require("express");
var session = require("express-session");

//Passport.js for Password verification
var passport = require("./config/passport");

var db = require("./models");
const logger = require('morgan');

// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Tells express to use the logger so you can see requests as they come in
// app.use(logger('dev'));

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// We need to use sessions to keep track of our user's login status
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// Add routes, both API and view
// app.use(routes);

app.use('/api', require("./routes"));
app.use('/', require("./routes/htmlRoutes"));

// Connect to the MySQL DB

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }

// Start the API server, sync models
db.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, function() {
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
});

module.exports = app;