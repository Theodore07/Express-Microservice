import { Router } from "express";
import { getAllUsers, createUser, findUserByEmail} from "../handler/user.handler.js";

const router = Router();

router.get("/", getAllUsers);
router.post("/create-user", createUser);
router.post("/verify", findUserByEmail);

export default router;
