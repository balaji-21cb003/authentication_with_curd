import express from "express";
import { deleteUser, getAllUsers, updateUser } from "../controllers/user";
import { isAuthenticated, isOwner } from "../middlewares";

const router = express.Router();

router.get("/users", isAuthenticated, getAllUsers);
router.delete("/users/:id", isAuthenticated, isOwner, deleteUser);
router.patch("/users/:id", isAuthenticated, isOwner, updateUser);

export default router;
