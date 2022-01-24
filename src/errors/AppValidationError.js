const AppBaseError = require("./AppBaseError");

class AppValidationError extends AppBaseError {
  constructor(message, ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(params);
    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppValidationError);
    }
    // custom props
    this.msg = message;
    this.code = 1;
    this.httpStatus = 400;
  }
}
module.exports = AppValidationError;
