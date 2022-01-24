const request = require("supertest");
const Mongoose = require("mongoose");
require("dotenv").config();
let server = require("../../index");

describe("Test the record controller for /restv1/records ", () => {

 //max timeout
  jest.setTimeout(15000);

  // connect database to test routes before testing
  beforeAll(() => {
    Mongoose.connect(process.env.GETIR_MONGODB_URI);
  });

  // disconnect from database after all tests executed
  afterAll((done) => {
    Mongoose.disconnect(done);
  });

  test("valid test for fetching the records", async () => {
    await request(server)
      .post("/restv1/records")
      .send({
        minCount: 69,
        maxCount: 85,
        startDate: '2017-01-28',
        endDate: '2018-01-28',
      })
      .expect(200)
      
  });
});
