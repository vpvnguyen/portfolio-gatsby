const express = require("express");
const router = express.Router();
const moment = require("moment");

router.get("/moment", async (req, res) => {
  try {
    console.log(`moment.now(): ${moment.now()}`);
    console.log(`moment.locales(): ${moment.locales()}`);
    console.log(
      `moment().format("MMMM Do YYYY, h:mm:ss a"): ${moment().format(
        "MMMM Do YYYY, h:mm:ss a"
      )}`
    ); // June 9th 2020, 6:48:18 pm
    console.log(`Date.now(): ${Date.now()}`);
    // moment().format("dddd"); // Tuesday
    // moment().format("MMM Do YY"); // Jun 9th 20
    // moment().format("YYYY [escaped] YYYY"); // 2020 escaped 2020
    // moment().format();
    const utcDate = new Date().getTimezoneOffset();
    console.log(`utcDate: ${utcDate}`);

    res.status(200).json({
      momentNow: moment.now(),
      momentLocales: moment.locales(),
      momentFormat: moment().format("MMMM Do YYYY, h:mm:ss a"),
      dateNow: Date.now(),
      utcDate: utcDate,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
});

module.exports = router;
