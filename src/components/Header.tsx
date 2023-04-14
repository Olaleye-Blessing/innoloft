import { FC } from 'react'
import HomeLogo from '@/components/HomeLogo'

const Header: FC = () => {
  return (
    <header className='px-5 py-[0.875rem] bg-blue-1'>
      <figure>
        <HomeLogo />
      </figure>
    </header>
  )
}

export default Header
