import { ChangeEvent, FC, useState } from 'react'
import Input from '@/components/Input'
import TextArea from '@/components/TextArea'
import { handleEditProduct } from '@/pages/product/Edit'
import Button from '@/components/Button'

interface Props {
  name: string
  detail: string
  handleEditProduct: handleEditProduct
}

type ProductProps = Pick<Props, 'name' | 'detail'>

const Detail: FC<Props> = ({ detail, name, handleEditProduct }) => {
  const [current, setCurrent] = useState({ name, detail })
  const [edited, setEdited] = useState({ name, detail })

  const actions = [
    {
      label: 'Cancel',
      onClick: () => {
        setEdited(current)
      },
    },
    {
      label: 'Save',
      onClick: () => {
        handleEditProduct(edited)
        setCurrent(edited)
      },
    },
  ]

  const hanldeChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setEdited((prev) => ({ ...prev, [name]: value }))
  }

  const isEdited = Object.keys(current).some(
    (key: string) =>
      current[key as keyof ProductProps] !== edited[key as keyof ProductProps]
  )

  return (
    <>
      <Input
        label=''
        name='name'
        id='name'
        value={edited.name}
        onChange={hanldeChange}
      />
      <TextArea
        name='detail'
        label=''
        value={edited.detail}
        onChange={hanldeChange}
      />
      <div className='flex items-center justify-end space-x-1 mt-2 '>
        {actions.map(({ label, onClick }) => (
          <Button
            key={label}
            as='button'
            type='button'
            className={
              label === 'Cancel' ? 'bg-red-100 text-red-950 !font-semibold' : ''
            }
            onClick={() => {
              if (isEdited) onClick()
            }}
            disabled={!isEdited}
          >
            {label}
          </Button>
        ))}
      </div>
    </>
  )
}

export default Detail
