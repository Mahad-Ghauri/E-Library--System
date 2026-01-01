const express = require('express');
const bookRoutes = require('./bookRoutes');

// Main router
const router = express.Router();

router.use(bookRoutes);

module.exports = router;

