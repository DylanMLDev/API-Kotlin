const mongoose = require("mongoose");
var debug = require('debug')('ForGot:server');

mongoose
  .connect(process.env.MONGO_URI || "mongodb+srv://mongodb-cacc75f9.mongo.ondigitalocean.com")
  .then(
    () => {
      debug("Database connected ");
    },
    (err) => {
      debug("Error to connect to database %o", err);
    }
  );