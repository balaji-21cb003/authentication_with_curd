import express from "express";
import authenticationRoutes from "./authentication";
import userRoutes from "./user";

const router = express.Router();

router.use(authenticationRoutes);
router.use(userRoutes);

export default router;
