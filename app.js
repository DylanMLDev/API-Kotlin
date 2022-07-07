var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var helmet = require("helmet");
var authRouter = require("./routers/auth");
var userRouter = require("./routers/user");
var taskRouter = require("./routers/task");
var medicineRouter = require("./routers/medicine");
var organizationRouter = require("./routers/organization");
//var fallRouter = require("./routers/fall");
//var requestRouter = require("./routers/request");
var passport = require("passport");
var errorHandler = require("./utils/errorHandler");
require("./database/config");
require("./auth/auth");

var app = express();

app.use(logger("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(authRouter);
//app.use(passport.authenticate("jwt", { session: false }))
app.use("/users", userRouter);
app.use("/tasks", taskRouter);
app.use("/medicines", medicineRouter);
app.use("/organizations", organizationRouter);
//app.use("/falls", fallRouter);
//app.use("/requests", requestRouter);
app.use(errorHandler);

module.exports = app;