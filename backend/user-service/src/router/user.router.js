import { Router } from "express";
import { getAllUsers, createUser } from "../handler/user.handler.js";

const router = Router();

router.get("/", getAllUsers);
router.post("/create-user", createUser);

export default router;
