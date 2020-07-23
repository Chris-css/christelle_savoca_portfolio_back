const express = require("express");
const router = express.Router();

const developpers = require("./developpers");
const stacks = require("./stacks");
router.use("/developpers", developpers);
router.use("/stacks", stacks);

module.exports = router;
