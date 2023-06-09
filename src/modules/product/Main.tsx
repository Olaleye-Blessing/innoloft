import { FC } from 'react'
import Patent from '@/components/icons/Patent'
import { Product } from '@/interfaces/Product'
import Detail from './edit/Detail'
import { handleEditProduct } from '@/pages/product/Edit'

interface Props
  extends Pick<Product, 'name' | 'picture' | 'description' | 'type'> {
  edit?: boolean
  handleEditProduct?: handleEditProduct
}

const Main: FC<Props> = ({
  name,
  picture,
  description,
  type,
  edit = false,
  handleEditProduct,
}) => {
  const descriptions = description.split('\n')

  return (
    <section className='mb-10 lg:mb-0 lg:flex-1'>
      <div className='relative mb-5'>
        <div className='flex items-center justify-start bg-white rounded-br-md absolute top-[-0.0625rem] left-0'>
          <figure className='bg-blue-1 p-3 rounded-tl-md rounded-br-md mr-[0.625rem]'>
            <Patent />
          </figure>
          <p className='font-semibold text-black p-[0.625rem]'>{type.name}</p>
        </div>
        <figure>
          <img src={picture} alt='' />
        </figure>
      </div>
      <div className='pl-5 lg:px-5 lg:pb-[1.875rem]'>
        {edit ? (
          <>
            <Detail
              name={name}
              detail={description}
              handleEditProduct={handleEditProduct!}
            />
          </>
        ) : (
          <>
            <h2 className='mb-[0.625rem]'>{name}</h2>
            {descriptions.map((desc, key) => (
              <p key={key} className='mt-2'>
                {desc}
              </p>
            ))}
          </>
        )}
      </div>
    </section>
  )
}

export default Main
