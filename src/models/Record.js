const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recordSchema = new Schema(
  {
    key: {
      type: String,
    },
    value: {
      type: String,
    },
    createdAt: {
      type: Date,
    },
    counts: {
      type: [Number],
    },
  },
  { versionKey: false }
  
);

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;
