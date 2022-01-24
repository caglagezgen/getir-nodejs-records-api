const Joi = require("joi");
const AppValidationError = require("../../errors/AppValidationError");
const logger = require("../../log/logger");

module.exports = {
  getBody: async (req, res, next) => {
    logger.info(`Validation get.records body: ${JSON.stringify(req.body)}`);
    const bodyValidationSchema = Joi.object({
      startDate: Joi.date().iso().required(),
      endDate: Joi.date().iso().required(),
      minCount: Joi.number().min(0).required(),
      maxCount: Joi.number().min(0).greater(Joi.ref("minCount")).required(),
    });
    try {
      const validBody = await bodyValidationSchema.validateAsync(req.body, {
        abortEarly: false,
      });
      res.locals.validBody = validBody;
      next();
    } catch (error) {
      // parse errors from error param
      // console.log(error);
      next(
        new AppValidationError(
          `Validation Errors: ${error.message.replace(/\"/g, "")}`
        )
      );
    }
  },
};
