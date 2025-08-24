import axios from 'axios'
import React, { useState } from 'react'
import Login from './login'
import { useNavigate } from 'react-router-dom'
const Logout = () => {
 const navigate = useNavigate()
  const [message,setMessage] = useState("")
  const logout = async () => {
    try {
      await axios.post("/api/v1/user/logout"
  )
  setMessage("User logout successfully")
navigate('/login')
    } catch (error) {
      setMessage("Error in User logout")
    }
  
  }
  return (
    
    <div>
    <div>

      <h2>Logout</h2>
      <div>If you click on logout you have to login again make sure you remember you email,username and password</div>
      <button onClick={logout}>Logout
      </button >

      {
        message&&(
          <div className='text-red-400 text-center font-medium'>{message}</div>
        )
      }
    </div>
    </div>
  )
}

export default Logout
