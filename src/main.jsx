import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import About from './pages/About.jsx'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([{
  path:'/',
  element:<Layout />,
  children:[
    {
      path:'/',
      element:<App />
    },
    {
      path:'/about',
      element:<About />
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
