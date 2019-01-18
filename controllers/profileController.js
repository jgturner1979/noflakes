const db = require("../models");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;

function create(req, res) {
  let socialScale = +req.body.soc_quest1 + +req.body.soc_quest2 + +req.body.soc_quest3 + +req.body.soc_quest4 + +req.body.soc_quest5 + +req.body.soc_quest6 + +req.body.soc_quest7 + +req.body.soc_quest8 + +req.body.soc_quest9 + +req.body.soc_quest10 + +req.body.soc_quest11 + +req.body.soc_quest12 + +req.body.soc_quest13 + +req.body.soc_quest14 + +req.body.soc_quest15;
  // console.log(socialScale);

  db.Profiles.create({
    display_name: req.body.display_name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    user_age: req.body.user_age,
    sexual_identity: req.body.sexual_identity,
    relationship_status: req.body.relationship_status,
    looking_for: req.body.looking_for,
    soc_quest1: req.body.soc_quest1,
    soc_quest2: req.body.soc_quest2,
    soc_quest3: req.body.soc_quest3,
    soc_quest4: req.body.soc_quest4,
    soc_quest5: req.body.soc_quest5,
    soc_quest6: req.body.soc_quest6,
    soc_quest7: req.body.soc_quest7,
    soc_quest8: req.body.soc_quest8,
    soc_quest9: req.body.soc_quest9,
    soc_quest10: req.body.soc_quest10,
    soc_quest11: req.body.soc_quest11,
    soc_quest12: req.body.soc_quest12,
    soc_quest13: req.body.soc_quest13,
    soc_quest14: req.body.soc_quest14,
    soc_quest15: req.body.soc_quest15,
    social_scale: socialScale,
    // profile_image: req.body.file
  }).then(function (dbProfiles) {
      // req.login(dbProfiles, function(err) {
      //   if (err) {
      //     console.log("Login error: " + err)
      //     return next(err);
      //   }
        console.log('Profile created.');
        res.json(dbProfiles);
        // return res.send("/member");
      // });
  }).catch(function(err) {
      console.log(err);
      res.json(err);
  });
};

function getAll(req, res) {
  console.log("All Profiles: ", req.user);
  db.Profiles.findAll({
  })
  .then(function (data) {
    res.json(data);
  });
};

function getOne(req, res) {
  db.Profiles.findOne({
    where: { username: req.params.username}
  }).then(function (data) {
    res.json(data);
  });
};


// Defining methods for the profileController
module.exports = {
  create,
  getAll,
  getOne
};