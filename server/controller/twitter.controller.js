require("dotenv").config();
const express = require("express");
const router = express.Router();

router.get("/twitter", (req, res) => {
  res.json({ message: "twitter" });
});

module.exports = router;
