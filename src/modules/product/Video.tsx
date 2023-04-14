import { Product } from '@/interfaces/Product'
import { FC } from 'react'
import ReactPlayer from 'react-player/youtube'

type Props = Pick<Product, 'video'>

const Video: FC<Props> = ({ video }) => {
  return (
    <figure className='h-[13.125rem] lg:h-[25rem] lg:max-w-[44.6875rem]'>
      <ReactPlayer url={video} width='100%' height='100%' />
    </figure>
  )
}

export default Video
