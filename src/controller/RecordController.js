// Require the record model
const Record = require("../models/Record");

module.exports = {
  // get records function for fetching the records
  getRecords: async (req, res, next) => {
    const validBody = res.locals.validBody;

    try {
      //Aggregation for fetch the data from database
      const records = await Record.aggregate([
        // Filter before adding total count param to reduce time and effort for fetch process
        {
          $match: {
            createdAt: {
              $gte: validBody.startDate,
              $lte: validBody.endDate,
            },
          },
        },
        // Add totalCount field to response payload
        {
          $addFields: {
            totalCount: { $sum: "$counts" },
          },
        },

        // Query for totalCount property
        {
          $match: {
            totalCount: {
              $gte: validBody.minCount,
              $lte: validBody.maxCount,
            },
          },
        },

        // Prepare the payload for requested format
        {
          $project: {
            _id: 0,
            key: 1,
            createdAt: 1,
            totalCount: 1,
          },
        },
      ]);
      // Return status 200 for success result 
      return res.status(200).json({ code: 0, msg: "Success", records });
    } catch (error) {
      return next(error);
    }
  },
};
