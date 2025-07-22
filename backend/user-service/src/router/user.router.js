import { Router } from "express";
import {
  getAllUsers,
  createUser,
  findUserByEmail,
  checkInUser,
  checkOutUser,
} from "../handler/user.handler.js";

const router = Router();

router.get("/", getAllUsers);
router.post("/create-user", createUser);
router.post("/verify", findUserByEmail);
router.post("/checkin", checkInUser);
router.post("/checkout", checkOutUser);

export default router;
