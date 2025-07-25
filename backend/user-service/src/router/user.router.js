import { Router } from "express";
import {
  getAllUsers,
  createUser,
  findUserByEmail,
  checkInUser,
  checkOutUser,
  authenticateUser,
} from "../handler/user.handler.js";

const router = Router();

router.get("/", getAllUsers);
router.post("/create-user", createUser);
router.post("/verify", findUserByEmail);
router.post("/checkin", checkInUser);
router.post("/checkout", checkOutUser);
router.get("/me", authenticateUser);

export default router;
