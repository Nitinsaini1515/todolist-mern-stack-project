import { Router } from "express"
import { login, logout, passwordchange, refreshaccesstoken, register } from "../controller/user.controller.js"
import verifyJWT from "../middlewares/auth.midddleware.js"
const router = Router()


router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").post(verifyJWT,logout)
router.route("/passchange").post(verifyJWT,passwordchange)
router.route("/refreshaccesstoken").get(verifyJWT,refreshaccesstoken)

export default router