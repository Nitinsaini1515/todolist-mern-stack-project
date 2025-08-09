
import './App.css'
import CreateTask from './components/createTask'
// import Navbar from './components/createTask'
import Navbar from './components/navbar'
import Home from './components/home'
import AboutUs from './components/aboutUs'
import Login from './components/login'
import Logout from './components/logout'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Register from './components/register'

const router = createBrowserRouter([
 {
    path: "/Home",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
 {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
    {
        path:"/aboutus",
        element:(  
          <>
        <Navbar/>
        <AboutUs/>
          </>
        ),
    },
    {
        path:"/login",
        element:(
      <>
        <Navbar/>
        <Login/>
        </>
        ),
        
    },
    {
        path:"/register",
        element:(
            <>
            <Navbar/>
            <Register/>
            </>
        )
        
    }
])
function App() {
  
  return (
<>
<RouterProvider router={router}/>
</>
  )
}

export default App
