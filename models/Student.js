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
  contact: {
    type: Number
  },
  collegeName: {
    type: String
  },
  class: {
    type: String
  },
  course: {
    type: String
  }
});

module.exports = mongoose.model("studentDB", StudentSchema);
