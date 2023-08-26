import express from "express";
import { postFormulaire } from "../controllers/FormulaireController.jsx";
const router = express.Router();

router.post("/post", postFormulaire);

export default router;
