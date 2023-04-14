import { FC } from 'react'

interface Props {
  value: string
  as: 'li' | 'p'
}

const OfferValue: FC<Props> = ({ value, as }) => {
  const Tag = as

  return (
    <Tag className='bg-white-1 rounded-[1.25rem] max-w-max py-[0.3125rem] px-[0.875rem] text-sm text-white-3'>
      {value}
    </Tag>
  )
}

export default OfferValue
