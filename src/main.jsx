import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import About from './pages/About.jsx'
import MoviePage from './pages/MoviePage.jsx'
import Movies from './pages/Movies.jsx'
import Footer from './components/Footer.jsx'
import Products from './pages/Products'

const Layout = () => {
  return (
    <section className='bg-blue-950 flex flex-col min-h-screen'>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </section>
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
      path: '/filmes',
      element: <Movies />
    },
    {
      path: '/filmes/:slug',
      element: <MoviePage />
    },
    {
      path: '/produtos',
      element: <Products />
    },
  ]
}])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
