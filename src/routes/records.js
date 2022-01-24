const router = require("express").Router();
const RecordController = require("../controller/RecordController");
const ValidateRecords = require("../middlewares/validation/records");

router.route("/").post(ValidateRecords.getBody, RecordController.getRecords);


module.exports = router;

