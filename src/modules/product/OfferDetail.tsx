import { FC, useState } from 'react'
import Clock from '@/components/icons/Clock'
import Model from '@/components/icons/Model'
import Money from '@/components/icons/Money'
import Tech from '@/components/icons/Tech'
import OfferValue from './OfferValue'
import Input from '@/components/Input'
import Select from '@/components/Select'
import { handleEditProduct } from '@/pages/product/Edit'

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

type Value = {
  id: number
  name: string
}

interface Props {
  label: keyof typeof labels
  value: string | Value[]
  handleEditProduct?: handleEditProduct
}

const sampleTrls = [
  'TRL 1: Olaleye Blessing',
  'TRL 2: Looking for a chance',
  'TRL 3: Hopefully!!',
]

const uniqueItems = (item: string) => [...new Set([...sampleTrls, item])]

const OfferDetail: FC<Props> = ({ label, value, handleEditProduct }) => {
  const [item, setItem] = useState('')

  const handleUpdate = (id: string | number) => {
    if (!handleEditProduct) return

    const items = (value as Value[]).filter((item) => item.id !== id)
    handleEditProduct({ [label]: items })
  }

  return (
    <li className='mb-5'>
      <div className='flex items-end justify-start mb-[0.625rem]'>
        <span aria-hidden='true' className='mr-1'>
          {labels[label].Icon}
        </span>
        <p>{labels[label].title}</p>
      </div>
      {Array.isArray(value) ? (
        <>
          <ul className='flex items-center justify-start gap-[0.3125rem] flex-wrap'>
            {value.map((item) => (
              <OfferValue
                key={item.id}
                id={item.id}
                value={item.name}
                as='li'
                handleRemoveItem={
                  handleEditProduct ? (id) => handleUpdate(id) : undefined
                }
              />
            ))}
          </ul>
          {handleEditProduct && (
            <Input
              label='item'
              onKeyDown={(e) => {
                if (e.key === 'Enter') e.preventDefault()
              }}
              onChange={(e) => {
                // prevent submitting when user presses enter
                e.preventDefault()
                setItem(e.target.value)
              }}
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  const val = item.trim()
                  if (!val) return

                  // check if val doesn't exist yet
                  if (
                    value.some(
                      (v) => v.name.toLowerCase() === val.toLowerCase()
                    )
                  ) {
                    alert(`${val} already exists.`)
                    return
                  }

                  const items = [
                    ...(value as Value[]),
                    { id: `${value.length}-${val}`, name: val },
                  ]
                  handleEditProduct && handleEditProduct({ [label]: items })
                  setItem('')
                }
              }}
              name='item'
              value={item}
              id='item'
            />
          )}
        </>
      ) : (
        <>
          <OfferValue value={value} as='p' />
          {handleEditProduct && labels[label].title === 'TRL' && (
            <Select
              label='TRL'
              options={uniqueItems(value).map((item) => ({
                value: item,
                label: item,
              }))}
              onChange={(e) => {
                if (!handleEditProduct) return

                const selectedValue = e.target.value
                handleEditProduct({ TRL: selectedValue })
              }}
            />
          )}
        </>
      )}
    </li>
  )
}

export default OfferDetail
