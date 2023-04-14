import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import Layout from '@/components/Layout'
import Home from '@/pages/Index'
import Product from '@/pages/product/Index'
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
    ],
  },
])

const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)

export default App
