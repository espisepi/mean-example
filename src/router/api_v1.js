const express = require("express");
const router = express.Router();

//const User = require('../models/user');

router.get("/users", (req, res) => {
  res.send("Holita Mundo!!!");
});

module.exports = router;
