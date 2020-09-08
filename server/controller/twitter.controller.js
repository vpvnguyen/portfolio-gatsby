const express = require("express");
const router = express.Router();
const twitter = require("../config/twitter.config");

router.get("/twitter", (req, res) => {
  res.json({ message: "twitter" });
});

module.exports = router;
