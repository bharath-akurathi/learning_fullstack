import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import NotFound from './components/NotFound.jsx'
import { useParams } from 'react-router-dom'

function UserProfile() {
  const params = useParams()
  return (
    <div>
      <h1>Hello {params.username}</h1>
    </div>
  )
}

function DefaultUser() {
  return (
    <div>
      <h1>Hello User</h1>
    </div>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>
    },
    {
      path: "/home",
      element: <><Navbar/><Home /></>
    },
    {
      path: "/about",
      element:<><Navbar/>{">"}<About /></>
    },
    {
      path: "/contact",
      element: <><Navbar/><Contact/></>
    },
    {
      path: "user",
      element: <><Navbar/><DefaultUser /></>

    },
    {
      path: "/user/:username",
      element: <><Navbar/><UserProfile /></>
    },
    {
      path: "*",
      element: <><NotFound /></>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App