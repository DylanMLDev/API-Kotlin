var {
    getAllMedicine,
    getMedicine,
    createMedicine,
    updateMedicine,
    deleteMedicine,
  } = require("../controllers/medicine");
  var express = require("express");
  var router = express.Router();
  
  router.get("/:username", getAllMedicine);
  router.get("/name/:medicine", getMedicine);
  router.post("/", createMedicine);
  router.put("/:medicine", updateMedicine);
  router.delete("/:medicine", deleteMedicine);
  
  module.exports = router;

