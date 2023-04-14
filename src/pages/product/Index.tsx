import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Section from '@/modules/product/Section'
import UserInfo from '@/modules/product/UserInfo'
import Main from '@/modules/product/Main'
import Video from '@/modules/product/Video'
import Offer from '@/modules/product/Offer'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { fetchProduct } from '@/app/slices/product'
import Button from '@/components/Button'

const Index = () => {
  const dispatch = useAppDispatch()
  const { data: config } = useAppSelector((state) => state.config)
  const { data: product, status } = useAppSelector((state) => state.product)

  useEffect(() => {
    if (!product) dispatch(fetchProduct())
  }, [])

  return (
    <>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Error</div>}
      {status === 'idle' && product && (
        <>
          <header className='flex items-center justify-between mb-5'>
            <div>{/* breadcrumbs */}</div>
            <Button
              as='a'
              to='/product/edit'
              className='!bg-blue-1 !text-white !px-[0.625rem] !py-[0.3125rem]'
            >
              Edit
            </Button>
          </header>
          <Section className='!pt-0 !pl-0 lg:flex lg:items-stretch lg:pb-0'>
            <Main
              picture={product.picture}
              description={product.description}
              type={product.type}
              name={product.name}
            />
            {config!.hasUserSection && (
              <UserInfo user={product.user} company={product.company} />
            )}
          </Section>
          <Section title='Video'>
            <Video video={product.video} />
          </Section>
          <Section title='Offer details'>
            <Offer {...product} />
          </Section>
        </>
      )}
    </>
  )
}

export default Index
