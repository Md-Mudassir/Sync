const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  city: {
    type: String
  },
  collegeName: {
    type: String
  }
});

module.exports = mongoose.model("studentDB", StudentSchema);
