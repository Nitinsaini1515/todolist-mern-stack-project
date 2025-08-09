import React, { useState } from "react";


const Register =()=>{
const [username,setUsername] = useState("")
const[password,setPassword] = useState("")
const [email,setEmail] = useState("")
const [fullname,setFullname] = useState("")
const [message,setMessage] = useState("")
const registerUser = async()=>{
  if((username&&password&&email&&fullname).trim()== ""){
    setMessage("All fields are required")
    return;
  }
  try {
    
    const response = await axios.post("/api/v1/user/register",
      {fullname:fullname},
      {username:username},
      {email:email},
      {password:password},{
            withCredentials:true,
      headers:{
"Content-Type":"application/json"}
      }
    );
    setMessage("User is registerd successfully")
  } catch (error) {
    setMessage("There is an error in register")
  }
}

return(
  <>
  <form action="/login" method="post">
  
  </form>
  </>
)
}
export default Register