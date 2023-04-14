import { FC } from 'react'
import Clock from '@/components/icons/Clock'
import Model from '@/components/icons/Model'
import Money from '@/components/icons/Money'
import Tech from '@/components/icons/Tech'
import OfferValue from './OfferValue'

type Labels = {
  [key: string]: {
    title: string
    Icon: JSX.Element
  }
}

const labels: Labels = {
  categories: {
    title: 'Technologies',
    Icon: <Tech />,
  },
  businessModels: {
    title: 'Business Model',
    Icon: <Model />,
  },
  trl: {
    title: 'TRL',
    Icon: <Clock />,
  },
  investmentEffort: {
    title: 'Costs',
    Icon: <Money />,
  },
}

interface Props {
  label: keyof typeof labels
  value:
    | string
    | {
        id: number
        name: string
      }[]
}

const OfferDetail: FC<Props> = ({ label, value }) => {
  return (
    <li className='mb-5'>
      <div className='flex items-end justify-start mb-[0.625rem]'>
        <span aria-hidden='true' className='mr-1'>
          {labels[label].Icon}
        </span>
        <p>{labels[label].title}</p>
      </div>
      {Array.isArray(value) ? (
        <ul className='flex items-center justify-start gap-[0.3125rem] flex-wrap'>
          {value.map((item) => (
            <OfferValue key={item.id} value={item.name} as='li' />
          ))}
        </ul>
      ) : (
        <OfferValue value={value} as='p' />
      )}
    </li>
  )
}

export default OfferDetail
