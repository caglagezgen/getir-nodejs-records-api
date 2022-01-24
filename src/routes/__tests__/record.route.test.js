const request = require("supertest");
const Mongoose = require("mongoose");
require("dotenv").config();

const server = require("../../index");

describe("Test the routes for /restv1/records", () => {
  // max time for testing
  jest.setTimeout(15000);

  // connect database to test routes before testing
  beforeAll(() => {
    console.log("before all");
    Mongoose.connect(process.env.GETIR_MONGODB_URI);
  });

  // disconnect from database after all tests executed
  afterAll((done) => {
    console.log("after all");
    Mongoose.disconnect(done);
  });

  test("It should not response the POST method for undefined URL", async () => {
    await request(server).post("/restv1/rrrecords").expect(404);
  });

  test("It should not response the GET method for undefined URL", async () => {
    await request(server).get("/restv1/api").expect(404);
  });

  test("It should not response the GET method for /records url", async () => {
    await request(server).get("/restv1/records").expect(405);
  });
});
