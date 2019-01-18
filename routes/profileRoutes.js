const express = require('express');
const router = express.Router();

const profileController = require('../controllers/profileController');

router.route('/')
    .post(profileController.create)
    .get(profileController.getAll)
    .get(profileController.getOne);

router.route('/:username')
    .get(profileController.getOne);
    // .put(profileController.update)
    // .destroy(profileController.destroy);

module.exports = router;