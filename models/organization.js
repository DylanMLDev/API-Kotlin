const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const OrganizationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },  
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      type: String,
      default: "organization",   
    },
    isActive: {
      type: Boolean,
      default: false,
    }
  },
);

const OrganizationkModel = mongoose.model("organization", OrganizationSchema);
module.exports = OrganizationkModel;
