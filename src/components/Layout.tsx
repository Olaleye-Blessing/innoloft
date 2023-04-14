import { FC } from 'react'
import { Outlet } from 'react-router'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'

const Layout: FC = () => {
  return (
    <>
      <Header />
      <div className='lg:flex'>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default Layout
