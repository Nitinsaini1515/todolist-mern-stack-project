 import { User } from "../models/user.model.js"
 import asynchandler from "../utils/asynchandler.js"
 import ApiErrors from "../utils/ApiErrors.js"
 import jwt from "jsonwebtoken";
 const verifyJWT = asynchandler(async(req, _, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        console.log("Cookies =>", req.cookies);
console.log("Authorization header =>", req.header("Authorization"));

        console.log(token);
        if (!token) {
            throw new ApiErrors(401, "Unauthorized request")
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if (!user) {
            
            throw new ApiErrors(401, "Invalid Access Token")
        }
    
        req.user = user;
        next()
    } catch (error) {
        throw new ApiErrors(401, error?.message || "Invalid access token")
    }
    
})
export default verifyJWT