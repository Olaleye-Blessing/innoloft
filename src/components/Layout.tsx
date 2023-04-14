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
        <main className='px-[0.625rem] max-w-[70.625rem] lg:flex-1 lg:pt-5'>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default Layout
