import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import Layout from '@/components/Layout'
import Home from '@/pages/Index'
import Product from '@/pages/product/Index'
import EditProduct from '@/pages/product/Edit'
import { store } from '@/app/store'

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
      {
        path: '/product/edit',
        element: <EditProduct />,
      },
    ],
  },
])

const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)

export default App
