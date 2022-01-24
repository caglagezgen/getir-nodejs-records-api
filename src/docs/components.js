
module.exports = {
  components: {
    schemas: {
      Record: {
        type: "object", // data type
        properties: {
          startDate: {
            type: "string", // data-type
            description: "Date representation as string  YYYY-MM-DD", // desc
            example: "2020-12-23",
          },
          endDate: {
            type: "string", // data-type
            description: "Date representation as string  YYYY-MM-DD", // desc
            example: "2021-12-23",
          },
          minCount: {
            type: "number", // data-type
            description: "Min Count", // desc
            example: 27000,
          },
          maxCount: {
            type: "number", // data-type
            description: "Min Count", // desc
            example: 3000,
          },
        },
        example: {
          startDate: "2016-01-26",
          endDate: "2018-02-02",
          minCount: 2700,
          maxCount: 3000
        }
      },
      RecordSuccessResponse: {
        type: "object", // data type
        properties: {
          code: {
            type: "number", // data-type
            description: "Status code 0: success, 1 error", // desc
            example: "1",
          },
          msg: {
            type: "string", // data-type
            description: "Status message", // desc
          },
          records: {
            type: "array",
            items: {
              type: "object",
              properties: {
                key: {
                  type: "string", // data-type
                },
                createdAt: {
                  type: "string", // data-type
                },
                totalCount: {
                  type: "number", // data-type
                },
              }
            }
          },
        },
      },
      ServerErrorResponse: {
        type: "object", // data type
        properties: {
          code: {
            type: "number", // data-type
            description: "Error Code", // desc
            example: 5,
          },
          msg: {
            type: "string", // data-type
            description: "Error message", // desc
            example: "Internal server error. Try again.",
          },
        },
        example: {
          code: 5,
          msg: "Internal server error. Try again.",
        }
      },
      ResourceValidationErrorResponse: {
        type: "object", // data type
        properties: {
          code: {
            type: "number", // data-type
            description: "Error Code", // desc
            example: 1,
          },
          msg: {
            type: "string", // data-type
            description: "Error message", // desc
            example: ".",
          },
        },
        example: {
          code: 1,
          msg: "Validation Errors: startDate must be in ISO 8601 date format",
        },
      },
      ResourceNotFoundErrorResponse: {
          type: "object", // data type
          properties: {
            code: {
              type: "number", // data-type
              description: "Error Code", // desc
              example: 2,
            },
            msg: {
              type: "string", // data-type
              description: "Error message", // desc
              example: "Not Found.",
            },
          },
       },
      MethodNotAllowedErrorResponse: {
          type: "object", // data type
          properties: {
            code: {
              type: "number", // data-type
              description: "Error Code", // desc
              example: 3,
            },
            msg: {
              type: "string", // data-type
              description: "Error message", // desc
              example: "Only post requests allowed",
            },
          },
          example: {
            code: 3,
            msg: "Only post requests allowed.",
          }
      },
     },
  },
};