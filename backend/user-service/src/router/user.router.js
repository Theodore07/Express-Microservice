import { Router } from "express";
import { getAllUsers } from "../handler/user.handler.js";

const router = Router()

router.get('/', getAllUsers)
// router.post('/users')

export default router