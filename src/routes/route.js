const express = require("express");  // --> importing the express framework
const router = express.Router();
const internControllers = require("../controllrs/intrnController");  // --> importing the internModel module


router.post("/functionup/interns", internControllers.createIntern);  // --> POST api to create an intern


module.exports = router;