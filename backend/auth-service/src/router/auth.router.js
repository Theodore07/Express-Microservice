import { Router } from "express";
import { loginHandler } from "../handler/auth.handler";

const router = Router()

router.post('/login', loginHandler)


export default router