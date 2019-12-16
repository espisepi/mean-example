const express = require("express");
const router = express.Router();

//const User = require('../models/user');

router.get("/users", (req, res) => {
  console.log("Hola mundillo");
});

module.exports = router;
