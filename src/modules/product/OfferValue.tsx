import { XMarkIcon } from '@heroicons/react/24/outline'
import { FC } from 'react'

interface Props {
  value: string
  id?: string | number
  as: 'li' | 'p'
  handleRemoveItem?: (id: string | number) => void
}

const OfferValue: FC<Props> = ({ id, value, as, handleRemoveItem }) => {
  const Tag = as

  return (
    <Tag className='bg-white-1 rounded-[1.25rem] max-w-max pt-[0.3125rem] pb-[0.5rem] px-6 text-sm text-white-3 relative'>
      {value}
      {handleRemoveItem && as === 'li' && (
        <button
          className='absolute top-[-0.3125rem] -right-1 text-red-700'
          type='button'
          onClick={() => handleRemoveItem(id!)}
        >
          <XMarkIcon className='w-5 h-5' />
        </button>
      )}
    </Tag>
  )
}

export default OfferValue
