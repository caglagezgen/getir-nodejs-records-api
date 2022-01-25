const mongoose = require("mongoose");
const logger = require("../log/logger");

module.exports = () => {
  mongoose.connect(process.env.GETIR_MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).catch(e => console.log("Database connection err."));
  const db = mongoose.connection;
  db.on("error", err => logger.error("Database connection error: ", err));
  db.once("open", () => logger.info("Connected to Database"));
}