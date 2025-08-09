import { Router } from "express"
import { deleteTask, gettask, TaskCreate, updatetask } from "../controller/todo.controller.js"
import verifyJWT from "../middlewares/auth.midddleware.js"
const router = Router()


router.route("/createtask").post(verifyJWT,TaskCreate)
router.route("/updatetask/:id").post(verifyJWT,updatetask)
router.route("/gettask").get(verifyJWT,gettask)
router.route("/deletetask/:id").post(verifyJWT,deleteTask)

export default router