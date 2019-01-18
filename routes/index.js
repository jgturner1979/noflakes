const express = require("express");
const router = express.Router();
const authRoutes = require('./authRoutes');
const profileRoutes = require('./profileRoutes');
// const imageRoutes = require('./imageRoutes');

router.use('/auth', authRoutes);
router.use('/profiles', profileRoutes);
// router.use('/upload/', imageRoutes);

module.exports = router;