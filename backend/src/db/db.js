import mongoose from "mongoose"
import { DB_NAME } from "../../constant.js"

export const Connection = async()=>{
  try {
    const ConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`connection is successfull at the server of ${ConnectionInstance.connection.host}`)
  } catch (error) {
    console.log("Error in connection of mongodb",error)
  }
}