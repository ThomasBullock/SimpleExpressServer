const express = require("express");
const router = express.Router();
const { catchErrors } = require("../handlers/errorHandlers");

router.get(
  "/",
  catchErrors(async (req, res) => {
    res.render("index");
  })
);

router.get(
  "/about",
  catchErrors(async (req, res) => {
    res.render("about");
  })
);

module.exports = router;
