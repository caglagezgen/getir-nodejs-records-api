const AppBaseError = require("./AppBaseError");

class AppMethodNotAllowed extends AppBaseError {
    constructor(message, ...params) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
      super(params);
        // Maintains proper stack trace for where our error was thrown (only available on V8)
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, AppMethodNotAllowed);
      }
      // custom props
      this.msg = message;
      this.code = 3;
      this.httpStatus = 405;
    }
  }
  module.exports = AppMethodNotAllowed;
  