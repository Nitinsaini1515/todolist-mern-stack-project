import express from "express"
const app = express()
import cors from "cors"
import todoroute from "./src/routes/todos.route.js"
import registerrouter from "./src/routes/user.routes.js"
import cookieParser from "cookie-parser"
app.use(cors({
  origin:"https://todolist-mern-stack-frontend-brg1.onrender.com",
  credentials:true
}))
app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true,limit:"20kb"
}))
app.use(cookieParser())
app.use(express.static("public"))

app.use("/api/v1/user",registerrouter)

app.use("/api/v2/todoroute",todoroute)
export default app