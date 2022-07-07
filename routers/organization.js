var {
    getAllOrganization,
    getOrganization,
    getOrganizationUser,
    createOrganization,
    updateOrganization,
    deleteOrganization,
  } = require("../controllers/organization");
  var express = require("express");
  var router = express.Router();
  
  router.get("/", getAllOrganization);//Admin
  router.get("/:username", getOrganization);
  router.get("/organization/:organizationName", getOrganizationUser);
  router.post("/", createOrganization);
  router.put("/:username", updateOrganization);
  router.delete("/:username", deleteOrganization);
  
  module.exports = router;

