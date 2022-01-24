const mongoose = require("mongoose");
const logger = require("../log/logger");

module.exports = () => {
  mongoose.connect(process.env.GETIR_MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).catch(e => console.log("Database connection errro."));
  const db = mongoose.connection;
  db.on("error", () => logger.error("Database Connection Error:" `${err}`));
  db.once("open", () => logger.info("Connected to Database"));
}