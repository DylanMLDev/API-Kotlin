var {
    getFall,
    createFall,
  } = require("../controllers/fall");
  var express = require("express");
  var router = express.Router();
  
  router.get("/:username", getFall);
  router.post("/", createFall);

  module.exports = router;