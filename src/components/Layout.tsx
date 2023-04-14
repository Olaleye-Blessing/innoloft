import { FC, useEffect } from 'react'
import { Outlet } from 'react-router'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { fetchConfig } from '@/app/slices/config'

const Layout: FC = () => {
  const dispatch = useAppDispatch()
  const config = useAppSelector((state) => state.config)

  useEffect(() => {
    dispatch(fetchConfig())
  }, [])

  // get the app config first before rendering the layout
  if (config.status === 'loading') return null

  if (config.status === 'failed')
    return <div>Something went wrong! Please reload</div>

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
