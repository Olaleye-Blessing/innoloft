import { FC } from 'react'
import OfferDetail from './OfferDetail'
import { Product } from '@/interfaces/Product'

type Props = Pick<
  Product,
  'categories' | 'businessModels' | 'trl' | 'investmentEffort'
>

const Offer: FC<Props> = ({
  businessModels,
  categories,
  investmentEffort,
  trl,
}) => {
  const details = {
    businessModels,
    categories,
    investmentEffort,
    trl: trl.name.slice(0, 55),
  }

  return (
    <ul className='lg:grid lg:grid-cols-2 lg:gap-x-[2.796875rem] lg:gap-y-4'>
      {Object.entries(details).map(([label, value]) => {
        return <OfferDetail key={label} label={label} value={value} />
      })}
    </ul>
  )
}

export default Offer
