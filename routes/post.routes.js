const express = require("express");
const { postFormulaire } = require("../controllers/FormulaireController.jsx");
const router = express.Router();

router.post("/post", postFormulaire);

module.exports = router;
