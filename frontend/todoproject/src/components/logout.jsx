import axios from 'axios'
import React, { useState } from 'react'
import Login from './login'
const Logout = ({is}) => {
  const [message,setMessage] = useState("")
  const logoutUser = async ()=>{
const response = await axios.post("/api/v1/user/logout",{},{
    withCredentials:true,
    headers:{
      "Content-Type":"application/json"
    }
  })
  }
  return (
    <div>
    <div>
      <h2>Logout</h2>
    </div>
    </div>
  )
}

export default Logout
