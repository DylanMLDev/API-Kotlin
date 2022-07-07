const OrganizationModel = require("../models/organization");
const UserModel = require("../models/user")

  exports.getAllOrganization = async (req, res, next) => {
    try {
      let organizations = await OrganizationModel.find({});
      res.send({
        count: organizations.length,
        organizations,
      });
    } catch (err) {
      next(err);
    }
  };

  exports.getOrganization = async (req, res, next) => {
    try {
      let username = req.params.username;
      let organizations = await OrganizationModel.findOne({ username: username });
      if (!organizations) {
        return res.status(404).send({
          message: "organization not found",
        });
      }
      res.send({ organizations });
    } catch (err) {
      next(err);
    }
  };

  exports.getOrganizationUser = async (req, res, next) => {
    try {
      let organization = req.params.organizationName;
      let userInOrganization = await UserModel.find({ organizationName:  organization });
    
      if (!userInOrganization) {
        return res.status(404).send({
          message: "User in organization not found",
        });
      }

      res.send({ userInOrganization });
    } catch (err) {
      next(err);
    }
  };

  exports.createOrganization = async (req, res, next) => {
    try {
      //TODO: Requiere validation
      let { name, username, email, password, roles, isActive} = req.body;
      let newOrganization = await OrganizationModel.create({ 
        name, 
        username,
        email,
        password,
        roles,
        isActive, 
      });
      newOrganization.roles = "organization";
      newOrganization.isActive = false;
      res.send({ newOrganization });
      newOrganization.save();
    } catch (err) {
      next(err);
    }
  };

  exports.updateOrganization = async (req, res, next) => {
    try {
      // TODO: Requiere validation
      // What task update?
      let usernameOrganization = req.params.username;
      // New data
      let { name, password, isActive } = req.body;
      let organizations = await OrganizationModel.findOne({ username: usernameOrganization });
      if(!organizations) return res.status(400).send({
        message: "Organization to update not found"
      })
  
      organizations.name = name;
      organizations.password = password;
      organizations.isActive = isActive;
      let updatedOrganization = await organizations.save();
      
      if (organizations == updatedOrganization) {
        return res.send({
          message: "Organization is updated",
          organizations: updatedOrganization,
        });
      }
      res.send({
        message: "cannot update de organization",
      });
    } catch (err) {
      next(err);
    }
  };

  exports.deleteOrganization = async (req, res, next) => {
    try {
      let usernameOrganization = req.params.username;
      let { deletedCount } = await OrganizationModel.deleteOne({ username: usernameOrganization });
      if (deletedCount == 1) {
        return res.send({
          message: "successfully deleted",
        });
      }
      return res.status(400).send({
        message: "cannot delete the organization, maybe is delete before",
      });
    } catch (err) {
      next(err);
    }
  };
