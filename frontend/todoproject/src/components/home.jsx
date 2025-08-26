import React from 'react'
import CreateTask from './createTask'
import Navbar from './navbar'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200 relative">
      {/* Background aesthetic image */}
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
        alt="Aesthetic background"
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
      />
      <div className="z-0  ">
        {/* <Navbar/> */}
        <CreateTask />
      </div>
    </div>
  )
}

export default Home
