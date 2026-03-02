import { Router } from "express";
import { getAllUser, login, register } from "../controllers/user.controller.js";

const router = Router()

router.route("/").get(getAllUser)
router.route("/register").post(register)
router.route("/login").post(login)

export default router;