import { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { fetchProduct, saveProduct } from '@/app/slices/product'
import Section from '@/modules/product/Section'
import Main from '@/modules/product/Main'
import UserInfo from '@/modules/product/UserInfo'
import { Product } from '@/interfaces/Product'
import Video from '@/modules/product/Video'
import Offer from '@/modules/product/Offer'
import Button from '@/components/Button'

export type handleEditProduct = (keyVals: any) => void

const Edit: FC = () => {
  const dispatch = useAppDispatch()
  const { data: config } = useAppSelector((state) => state.config)
  const { data: product, status } = useAppSelector((state) => state.product)

  const [editedProduct, setEditedProduct] = useState(product)
  const [saving, setSaving] = useState({
    loading: false,
    error: null,
  })

  const handleEditProduct: handleEditProduct = (keyVals) => {
    setEditedProduct((prev) => ({ ...prev, ...keyVals }))
  }

  const handleSaveProduct = async () => {
    setSaving({ loading: true, error: null })
    try {
      await dispatch(saveProduct(editedProduct!)).unwrap()
      alert('Product saved')
    } catch (error: any) {
      console.error(error)
      setSaving((prev) => ({ ...prev, error: error.message }))
    } finally {
      setSaving((prev) => ({ ...prev, loading: false }))
    }
  }

  useEffect(() => {
    if (!product) dispatch(fetchProduct())
  }, [])

  useEffect(() => {
    setEditedProduct(product)
  }, [product])

  if (status === 'loading') return <div>Loading...</div>
  if (status === 'failed') return <div>Error</div>
  if ((status === 'idle' && !product) || !editedProduct)
    return <div>Product not found</div>

  return (
    <form>
      <Section className='!pt-0 !pl-0 lg:flex lg:items-stretch lg:pb-0'>
        <Main
          edit
          picture={editedProduct.picture}
          description={editedProduct.description}
          type={editedProduct.type}
          name={editedProduct.name}
          handleEditProduct={handleEditProduct}
        />
        {config!.hasUserSection && (
          <UserInfo user={editedProduct.user} company={editedProduct.company} />
        )}
      </Section>
      <Section title='Video'>
        <Video
          video={editedProduct.video}
          handleEditProduct={handleEditProduct}
        />
      </Section>
      <Section title='Offer details'>
        <Offer {...editedProduct} handleEditProduct={handleEditProduct} />
      </Section>

      <Button
        as='button'
        type='submit'
        onClick={(e) => {
          e.preventDefault()
          handleSaveProduct()
        }}
        disabled={saving.loading}
      >
        {saving.loading ? 'Saving...' : 'Save Product'}
      </Button>
    </form>
  )
}

export default Edit
