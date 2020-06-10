const express = require("express");
const router = express.Router();
const moment = require("moment");

router.get("/moment", async (req, res) => {
  try {
    console.log(moment.now());
    console.log("");
    console.log(moment.locales());
    console.log("");
    console.log(moment().format("MMMM Do YYYY, h:mm:ss a")); // June 9th 2020, 6:48:18 pm
    console.log(Date.now());
    // moment().format("dddd"); // Tuesday
    // moment().format("MMM Do YY"); // Jun 9th 20
    // moment().format("YYYY [escaped] YYYY"); // 2020 escaped 2020
    // moment().format();
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
});

module.exports = router;
