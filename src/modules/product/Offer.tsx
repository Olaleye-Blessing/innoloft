import { FC } from 'react'
import OfferDetail from './OfferDetail'
import { Product } from '@/interfaces/Product'
import { handleEditProduct } from '@/pages/product/Edit'

interface Props
  extends Pick<
    Product,
    'categories' | 'businessModels' | 'trl' | 'investmentEffort'
  > {
  handleEditProduct?: handleEditProduct
}

const Offer: FC<Props> = ({
  businessModels,
  categories,
  investmentEffort,
  trl,
  handleEditProduct,
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
        return (
          <OfferDetail
            key={label}
            label={label}
            value={value}
            handleEditProduct={handleEditProduct}
          />
        )
      })}
    </ul>
  )
}

export default Offer
