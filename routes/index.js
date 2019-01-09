const express = require("express");
const router = express.Router();
const authRoutes = require('./authRoutes');
const profileRoutes = require('./profileRoutes');

router.route('/auth', authRoutes);
router.route('/profiles', profileRoutes);

module.exports = router;