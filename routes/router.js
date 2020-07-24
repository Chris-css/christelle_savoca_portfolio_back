const express = require("express");
const router = express.Router();

const developpers = require("./developpers");
const stacks = require("./stacks");
const projects = require("./projects");

router.use("/developpers", developpers);
router.use("/stacks", stacks);
router.use("/projects", projects);

module.exports = router;
