import { FC } from 'react'
import { MapPinIcon } from '@heroicons/react/24/outline'
import { Product } from '@/interfaces/Product'

type Props = Pick<Product, 'user' | 'company'>

const UserInfo: FC<Props> = ({ company, user }) => {
  return (
    <section className='pl-5 lg:flex-1 lg:max-w-[23.875rem] lg:pt-[1.875rem] lg:border-l lg:border-white-1'>
      <h2 className='mb-5'>Offered by</h2>
      <figure className='mb-4'>
        <img src={company.logo} alt='' />
      </figure>
      <div className='flex items-center justify-start mb-7'>
        <figure className='w-[4rem] h-[4rem] overflow-hidden mr-[0.625rem] rounded-full'>
          <img src={user.profilePicture} alt={user.firstName} />
        </figure>
        <div>
          <p className='font-semibold mb-[0.3125rem]'>
            {user.firstName} {user.lastName}
          </p>
          <p>{user.position}</p>
        </div>
      </div>
      <div className='flex items-start justify-start'>
        <figure className='mr-[0.3125rem]'>
          <MapPinIcon className='w-4 h-4' />
        </figure>
        <address>
          {company.address.street},<br />
          {company.address.zipCode} {company.address.city.name},{' '}
          {company.address.country.name}
        </address>
      </div>
    </section>
  )
}

export default UserInfo
