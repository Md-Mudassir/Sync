const express = require("express");
const Student = require("../models/Student");
const router = express.Router();

//@route  POST /student
//description Register student details
//@access Public
router.post("/", async (req, res) => {
  const student = new Student({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
    city: req.body.city,
    collegeName: req.body.collegeName
  });
  try {
    const studentSaved = await student.save();
    res.json(studentSaved);
  } catch (err) {
    res.json({ message: err });
  }
});

//@route  GET /students
//description Get all registered student details
//@access Public
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
