const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

//For securing environmental variables
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

app.use(cors());
app.use(express.json({ extended: false }));

//Students POST route access
const studentRoute = require("./routes/students");
app.use("/students", studentRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendfile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
//Port
app.listen(PORT, () => console.log(`Server started at  ${PORT}`));

// Connect to MongoDB
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
