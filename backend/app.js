import express from "express"
const app = express()
import cors from "cors"
import todoroute from "./src/routes/todos.route.js"
app.use(cors({
  origin:process.env.CORS_ORIGIN,
  Credential:true
}))
app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true,limit:"20kb"
}))
app.use(express.static("public"))


app.use("/api/v2/todoroute",todoroute)
export default app