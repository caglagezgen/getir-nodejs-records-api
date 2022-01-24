module.exports = {
  post: {
    tags: ["Fetch Records"], // operation's tag
    operationId: "Fetch Records",
    description: "This a a RESTful API with a single endpoint that fetches the record data in the provided MongoDB collection and return the results in the requested format.", // short desc
    parameters: [], // expected params
    requestBody: {
      // expected request body
      content: {
        // content-type
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Record", // todo input data model
          },
        },
      },
    },
    // expected responses
    responses: {
      // response code
      200: {
        description: "Records fetched successfully", // response desc
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/RecordSuccessResponse", 
            },
          },
        },
      },
      // response code
      500: {
        description: "Server Error", 
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/ServerErrorResponse", 
            },
          },
        },
      },
      400: {
        description:"Resource Validation Error.",
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/ResourceValidationErrorResponse", 
            },
          },
        },
      },
      404: {
        description:"Resource Not Found Error",
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/ResourceNotFoundErrorResponse", 
            },
          },
        },
      },
      405: {
        description:"Method Not Allowed Error",
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/MethodNotAllowedErrorResponse", 
            },
          },
        },
      }
    },
  },
}