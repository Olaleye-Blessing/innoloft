import { FC } from 'react'
import HomeLogo from '@/components/HomeLogo'
import { useAppSelector } from '@/app/hooks'

const Header: FC = () => {
  const { data } = useAppSelector((state) => state.config)

  return (
    <header
      className='px-5 py-[0.875rem]'
      style={{
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        backgroundColor: data!.mainColor,
      }}
    >
      <figure>
        <HomeLogo />
      </figure>
    </header>
  )
}

export default Header
