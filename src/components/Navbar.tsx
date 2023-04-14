import { FC, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  HomeIcon as HomeOutlineIcon,
  CreditCardIcon as CreditCardSolidIcon,
} from '@heroicons/react/24/outline'
import {
  HomeIcon as HomeSolidIcon,
  CreditCardIcon as CreditCardOutlineIcon,
  Bars3Icon,
} from '@heroicons/react/24/solid'

const pages = [
  { name: 'Home', href: '/', icon: HomeOutlineIcon, activeIcon: HomeSolidIcon },
  {
    name: 'Product',
    href: '/product',
    icon: CreditCardSolidIcon,
    activeIcon: CreditCardOutlineIcon,
  },
]

const Navbar: FC = () => {
  const location = useLocation()
  const navContRef = useRef<HTMLDivElement>(null)
  const toggleNav = () => {
    const navCont = navContRef.current

    if (!navCont) return

    navCont.classList.toggle('show')
  }

  useEffect(() => {
    const navCont = navContRef.current

    if (!navCont) return

    navCont.classList.remove('show')
  }, [location.pathname])

  return (
    <div className='lg:h-screen lg:sticky lg:top-0 lg:left-0 lg:w-[14rem] lg:pt-5'>
      <button
        className='fixed top-4 right-2 text-white lg:hidden'
        onClick={toggleNav}
        aria-label='Toggle Menu'
      >
        <Bars3Icon className='h-6 w-6' />
      </button>
      <div
        ref={navContRef}
        className='nav__container fixed top-[3.45rem] -left-full w-full bg-white transition-all duration-300 ease-in-out lg:static lg:bg-transparent'
      >
        <nav>
          <ul>
            {pages.map((page) => {
              const Icon =
                location.pathname === page.href ? page.activeIcon : page.icon

              return (
                <li key={page.name}>
                  <NavLink
                    to={page.href}
                    className={({ isActive }) =>
                      `flex items-center justify-start my-5 px-5 text-black hover:opacity-60 lg:mt-0 ${
                        isActive ? 'font-semibold' : ''
                      }}`
                    }
                    aria-current={
                      location.pathname === page.href ? 'page' : undefined
                    }
                  >
                    <span aria-hidden={true} className='mr-1'>
                      <Icon className='h-4 w-4' />
                    </span>
                    <span>{page.name}</span>
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
