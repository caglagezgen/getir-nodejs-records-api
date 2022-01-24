const AppMethodNotAllowed = require("../errors/AppMethodNotAllowed");
const AppNotFoundError = require("../errors/AppNotFoundError");

const router = require("express").Router();

// Routes
router.use("/records", require("./records"));

router.use("", (req, res, next) => {
  console.log(req.url);
  if (req.url == "/records" && req.method !== "POST") {
    next(new AppMethodNotAllowed("Only post requests allowed."));
  } else {
    next(new AppNotFoundError("Not found."));
  }
});

module.exports = router;
