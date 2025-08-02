import { Router } from "express"
import { deleteTask, TaskCreate, updatetask } from "../controller/todo.controller"
const router = Router()


router.route("/createtask").post(veriJwt,TaskCreate)
router.route("/updatetask/:id").post(veriJwt,updatetask)
router.route("/deletetask").post(veriJwt,deleteTask)

export default router