import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/Index'
import Product from '@/pages/product/Index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/product/',
        element: <Product />,
      },
    ],
  },
])

const App = () => <RouterProvider router={router} />

export default App
