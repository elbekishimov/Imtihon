import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import Blog from './Pages/Blog/Blog'
import NotFound from './Components/NotFound/NotFound'
import SignUp from './Pages/SignUp/SignUp'
import SignIn from './Pages/SignIn/SignIn'
import ProductDetails from './Pages/Products/ProductsDetails/ProductDetails'
import Contact from './Pages/Contact/Contact'
import Services from './Pages/Services/About'
import Footer from './Components/Footer/Footer'

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/services',
          element: <Services />
        },
        {
          path: '/products',
          element: <Products />
        },
        {
          path: '/blog',
          element: <Blog />
        },
        {
          path: '/sign-in',
          element: <SignIn />
        },
        {
          path: '/sign-up',
          element: <SignUp />
        },
        {
          path: "products/:id",
          element: <ProductDetails />
        },
        {
          path: "/contact",
          element: <Contact/>
        }
      ]
    },
    {
      element: <Footer/>
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return (
    <>
      <div className=" max-w-[1440px] m-auto mt-1">
        <RouterProvider router={routes} />
      </div>
    </>
  )
}

export default App
