import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './view/Home.jsx'
import About from './view/About.jsx'
import Navbar from './componant/Navbar.jsx';
import Contactbar from './componant/Contactbar.jsx';
import Resume from './view/Resume.jsx';
import Portfolio from './view/Portfolio.jsx';
import Blog from './view/Blog.jsx';
import Contact from './view/Contact.jsx';

import  '../public/assets/css/home.css';
import '../public/assets/css/navbar.css';



function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <About/>
    },
    {
      path:'/about',
      element: <About/>
    },
    {
      path:'/resume',
      element: <Resume/>
    },
    {
      path:'/portfolio',
      element:<Portfolio/>
    },
    {
      path:'/blog',
      element: <Blog/>
    },
    {
      path:'/contact',
      element: <Contact/>
    }
  ])
  return (
    <>
    {/* <Contactbar/> */}
    {/* <Home/> */}
     <RouterProvider router={router}/>
{/* <Navbar/> */}
    </>
  )
}

export default App
