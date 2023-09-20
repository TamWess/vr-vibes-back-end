const express = require("express");
const dotenv = require("dotenv").config();
const router = express.Router();
const { createReservation } = require("../controllers/form.controller.js");
const nodemailer = require("nodemailer");
// const { validationResult } = require("express-validator");

router.post("/reservations", createReservation);

router.get("/healthcheck", (req, res) => {
  res.json({ msg: "OK" });
});

module.exports = router;
