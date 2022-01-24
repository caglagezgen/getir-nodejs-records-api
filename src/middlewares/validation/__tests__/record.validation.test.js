const request = require("supertest");
const Mongoose = require("mongoose");
require("dotenv").config();
const server = require("../../../index")

describe("Test the validations for /restv1/records url", () => {

  jest.setTimeout(15000);

  beforeAll(() => {
    Mongoose.connect(process.env.GETIR_MONGODB_URI);
  });

  afterAll((done) => {
    Mongoose.disconnect(done);
  });

  test("validation test for request params (startDate is in invalid format), status should be 400", async () => {
    await request(server)
      .post("/restv1/records")
      .send({
        startDate: "301508-02",
        endDate: "2015-09-03",
        minCount: 30,
        maxCount: 600,
      })
      .expect(400);
  });

  test("validation test for request params (minCount is not defined), status should be 400", async () => {
    await request(server)
      .post("/restv1/records")
      .send({
        startDate: "2017-03-20",
        endDate: "2018-04-12",
        maxCount: 50,
      })
      .expect(400);
  });

  test("validation test for request params (minCount is greater than maxCount), status should be 400", async () => {
    await request(server)
      .post("/restv1/records")
      .send({
        startDate: "2016-10-09",
        endDate: "2018-02-20",
        minCount: 80,
        maxCount: 20,
      })
      .expect(400);
  });
});
