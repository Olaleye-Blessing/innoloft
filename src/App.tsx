import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '@/components/Layout'
import Product from '@/pages/product/Index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/product/',
        element: <Product />,
      },
    ],
  },
])

const App = () => <RouterProvider router={router} />

export default App
