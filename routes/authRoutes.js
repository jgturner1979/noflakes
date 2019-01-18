//Back End - Routes Folder - authRoutes.js

const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../config/passport')(passport);
require('../models/users');
const auth = require('../config/middleware/auth');
const profileController = require('../controllers/profileController');

router.post('/', passport.authenticate('local'), function(req, res) {
        res.json(req.body);
});

router.post('/signup', function(req, res) {
    console.log(req.body);
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
    }).then(function(){
        res.redirect(307, '/login');
    }).catch(function(err) {
        console.log(err);
        res.json(err);
    });
});

// router.route('/api/auth')
//     .get(profileController.getOne);

module.exports = router;