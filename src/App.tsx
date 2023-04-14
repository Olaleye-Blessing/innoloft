import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '@/components/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
])
const App = () => <RouterProvider router={router} />

export default App
