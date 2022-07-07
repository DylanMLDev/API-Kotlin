  var {
    getAll,
    getTask,
    createTask,
    updateTask,
    deleteTask,
  } = require("../controllers/task");
  var express = require("express");
  var router = express.Router();
  
  router.get("/:username", getAll);
  router.get("/name/:_id", getTask);
  router.post("/", createTask);
  router.put("/:id", updateTask);
  router.delete("/:id", deleteTask);
  
  module.exports = router;
