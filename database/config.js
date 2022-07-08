const mongoose = require("mongoose");
var debug = require('debug')('ForGot:server');

mongoose
  .connect(process.env.MONGO_URI || "mongodb+srv://doadmin:Lq371yA9uPm842M5@mongodb-cacc75f9.mongo.ondigitalocean.com/admin?tls=true&authSource=admin&replicaSet=mongodb")
  .then(
    () => {
      debug("Database connected ");
    },
    (err) => {
      debug("Error to connect to database %o", err);
    }
  );