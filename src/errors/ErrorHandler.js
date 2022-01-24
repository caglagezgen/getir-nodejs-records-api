const logger = require("../log/logger");
const AppBaseError = require("./AppBaseError");

module.exports = (err, req, res, next) => {
  logger.error(`${err}`);
  if (err instanceof AppBaseError) {
    return res.status(err.httpStatus).json({ code: err.code, msg: err.msg });
  } else {
    return res
      .status(500)
      .json({ code: 5, msg: "Internal server error. Try again." });
  }
};
