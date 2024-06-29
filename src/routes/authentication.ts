import express from "express";
import { Register, Login } from "../controllers/authentication";

const router = express.Router();

router.post("/auth/register", Register);
router.post("/auth/login", Login);

export default router;
