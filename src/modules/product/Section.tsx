import { FC, PropsWithChildren } from 'react'

interface Props {
  title?: string
  className?: string
}

const Section: FC<PropsWithChildren<Props>> = ({
  title,
  className = '',
  children,
}) => {
  return (
    <section
      className={`bg-white border border-white-1 rounded-md py-[1.875rem] px-5 mb-5 ${className}`}
    >
      {title && <h2 className='font-semibold mb-5'>{title}</h2>}
      {children}
    </section>
  )
}

export default Section
