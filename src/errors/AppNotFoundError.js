const AppBaseError = require("./AppBaseError");

class AppNotFoundError extends AppBaseError {
    constructor(message, ...params) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
      super(params);
        // Maintains proper stack trace for where our error was thrown (only available on V8)
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, AppNotFoundError);
      }
      // custom props
      this.msg = message;
      this.code = 2;
      this.httpStatus = 404;
    }
  }
  module.exports = AppNotFoundError;
  