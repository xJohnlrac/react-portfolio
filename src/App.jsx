import './styles/global.scss'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import Navbar from './components/navBar/NavBar'
import Footer from './components/footer/Footer'
import Hamburger from './components/hamburger/Hamburger'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const App = () => {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar/>
        <div className="container">
        <Outlet/>
        </div>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/projects',
          element: <Projects/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
      ] 
    },
    {
      path: '/hamburger',
      element: <Hamburger/>
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App