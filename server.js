//Express dependencies
const express = require("express");
const session = require("express-session");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const auth = require('./routes/authRoutes');
const profile = require('./routes/profileRoutes');
const passport = require('passport');
// const multer = require("multer");

require("dotenv").config();

//Passport.js for Password verification
require("./config/passport")(passport);
// require("./config/passport")(passport);

//Morgan and Logger dependencies
const db = require("./models");
const logger = require('morgan');

const PORT = process.env.PORT || 3001;

// Tells express to use the logger so you can see requests as they come in
app.use(logger('dev'));

// Define middleware here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// We need to use sessions to keep track of our user's login status
app.use(cookieParser());
app.use(session({ 
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
// app.use('/api', profile);
// app.use('/api', auth);

app.use('/api', require("./routes"));
// app.use('/auth', require("./routes"));
// app.use('/', require("./routes/htmlRoutes"));
// app.use('/', require('./routes/imageRoutes'));

// app.use(() => multer({ dest: './public/uploads/',
//   rename: function (fieldname, filename) {
//     return filename;
//   },
//  }));

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