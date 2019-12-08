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
    contact: req.body.contact,
    collegeName: req.body.collegeName,
    class: req.body.class,
    course: req.body.course
  });
  try {
    const studentSaved = await student.save();
    res.json(studentSaved);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
