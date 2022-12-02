const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("./user.modal");

const app = express.Router();

var blackList = [];

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const activeUser = await User.findOne({ email });
  if (activeUser) {
    res.status(401).send(`${email} Already Registered`);
  } else {
    const newUser = await User.create({ name, password, email });
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.SECRETKEY,
      { expiresIn: "7 days" }
    );
    res.send({ message: "Signup Successfull", token });
  }
});

app.post("/signin", async (req, res) => {
  const { name, email, password } = req.body;
  const activeUser = await User.findOne({ email, password });
  if (activeUser) {
    const token = jwt.sign(
      { id: activeUser._id, email: activeUser.email },
      process.env.SECRETKEY,
      { expiresIn: "7 days" }
    );
    res.send({ message: "Signin Successfull", token });
  } else {
    res.status(404).send("Invalid Credentials");
  }
});

app.post("/logout", (req, res) => {
  const token = req.headers.authorization;
  blackList.push(token);
  res.send("Logged out");
});

module.exports = app;
