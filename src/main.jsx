import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import About from './pages/About.jsx'
import MoviePage from './components/MoviePage.jsx'
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from './components/app-sidebar.jsx'
import Footer from './components/Footer.jsx'

const Layout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className='w-full bg-sky-950'>
        <div className='min-h-screen'>
          <Navbar />
          <Outlet />
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  )
}

const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/',
      element: <App />
    },
    {
      path: '/sobre',
      element: <About />
    },
    {
      path: '/filmes/:slug',
      element: <MoviePage />
    },
  ]
}])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
