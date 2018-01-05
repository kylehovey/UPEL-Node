// Library dependencies
const express = require("express");
const path = require("path");
//const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

// Routes
const index = require("./app_modules/express/routes/index");
const api = require("./app_modules/express/routes/api");

// Root middlewares
const notFoundHandler = require("./app_modules/express/middlewares/404.js");
const errorHandler = require("./app_modules/express/middlewares/error.js");

// Instantiate application
var app = express();

// View engine setup
app.set("views", path.join(__dirname, "app_modules/pug/views"));
app.set("view engine", "pug");

//app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Set up routes
app.use("/", index);
app.use("/api", api);

// Set up janitor middlewares
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
