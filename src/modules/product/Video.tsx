import Input from '@/components/Input'
import { Product } from '@/interfaces/Product'
import { handleEditProduct } from '@/pages/product/Edit'
import { FC } from 'react'
import ReactPlayer from 'react-player/youtube'

interface Props extends Pick<Product, 'video'> {
  handleEditProduct?: handleEditProduct
}

const Video: FC<Props> = ({ video, handleEditProduct }) => {
  if (handleEditProduct)
    return (
      <Input
        label='Video'
        type='url'
        name='video'
        id='video'
        value={video}
        onChange={(e) => {
          handleEditProduct({ video: e.target.value })
        }}
      />
    )
  return (
    <figure className='h-[13.125rem] lg:h-[25rem] lg:max-w-[44.6875rem]'>
      <ReactPlayer url={video} width='100%' height='100%' />
    </figure>
  )
}

export default Video
