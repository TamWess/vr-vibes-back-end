const express = require("express");
const router = express.Router();
const {
  createReservation,
  listReservations,
} = require("../form/form.controller.js");
// const { validationResult } = require("express-validator");
const { getCatalogueJeux } = require("../jeux/jeux.controller.js");
const authRouter = require("../auth/auth.controller.js");
const checkJwt = require("../middlewares/check.jwt.js");

router.get("/healthcheck", (req, res) => {
  res.json({ msg: "OK" });
});

router.post("/reservations", createReservation);

router.get("/reservations", checkJwt, listReservations);

router.get("/get", getCatalogueJeux);

module.exports = router;
