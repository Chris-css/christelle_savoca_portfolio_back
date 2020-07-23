const express = require('express');
const router = express.Router();

const developpers = require('./developpers');
router.use('/developpers', developpers);

module.exports = router;