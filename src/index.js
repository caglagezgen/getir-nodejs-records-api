// Require the packages 
const express = require("express");
const bodyParser = require("body-parser");
// HTTP request logger middleware for node.js
const morgan = require("morgan");
//const routes = require("./routes");
const mongoDbConnection = require("./db/mongoConnection");
const cors = require("cors");
const ErrorHandler = require("./errors/ErrorHandler");
//Require for documentation
const swaggerUI = require("swagger-ui-express");
const docs = require("./docs");

// mongo connection
mongoDbConnection();
//initilaze the app 
const app = express();
// documentation setup
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));
// handle cors
app.use(
  cors({
    // credentials:true,
    origin: "*",
    methods: "*",
    // methods: ["OPTIONS","GET", "PUT", "POST", "DELETE", "PATCH"]
  })
);

app.use(bodyParser.json());
app.use(morgan("dev"));
//routing
app.use("/restv1", require("./routes/index"));
// error handler for app
app.use(ErrorHandler);
//export the app
module.exports = app;
