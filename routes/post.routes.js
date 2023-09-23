const express = require("express");
const dotenv = require("dotenv").config();
const router = express.Router();
const { createReservation } = require("../controllers/form.controller.js");
const nodemailer = require("nodemailer");
// const { validationResult } = require("express-validator");
import { getCatalogueJeux } from "../controllers/jeux.controller.js";

router.post("/reservations", createReservation);

router.get("/get-catalogue-jeux-vrvibes", getCatalogueJeux);

router.get("/healthcheck", (req, res) => {
  res.json({ msg: "OK" });
});

module.exports = router;
