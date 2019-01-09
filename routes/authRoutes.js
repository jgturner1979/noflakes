//Back End - Routes Folder - authRoutes.js

var db = require("../models");
// const profileController = require("../../controllers/profileController");

var passport = require("../config/passport");
// var username = sessionStorage.getItem("username");

module.exports = function (app) {

//Passport Authentication for Login
  app.post("/login", passport.authenticate("local"), function (req, res) {
    console.log("THIS IS WHAT IS BEING SENT BACK", req.body);
    
    res.send("/members");
  });

//Create a new user profile

  app.post("/profiles", function (req, res) {
    console.log(req.body);

  });

}