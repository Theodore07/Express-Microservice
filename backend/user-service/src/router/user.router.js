import { Router } from "express";
import { getAllUsers, createUser,} from "../handler/user.handler.js";
import { findUserByEmail } from "../service/user.service.js";

const router = Router();

router.get("/", getAllUsers);
router.post("/create-user", createUser);
router.post("/verify", findUserByEmail);

export default router;
