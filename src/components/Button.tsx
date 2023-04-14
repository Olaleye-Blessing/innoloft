import { FC, MouseEventHandler, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

type BtnProps = {
  as: 'button'
  onClick: MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

type LinkProps = {
  as: 'a'
  to: string
}

type CommonProps = {
  className?: string
}

type Props = (BtnProps | LinkProps) & CommonProps

const Button: FC<PropsWithChildren<Props>> = ({
  as,
  className = '',
  children,
  ...rest
}) => {
  className = `bg-blue-200 px-4 py-2 text-blue my-4 rounded-md cursor-pointer ${className} hover:opacity-80 transition-all duration-200`

  if (as === 'button')
    className +=
      ' disabled:bg-white-3 disabled:cursor-not-allowed disabled:text-white'

  if (as === 'button') {
    return (
      <button className={className} {...rest}>
        {children}
      </button>
    )
  }

  return (
    <Link className={className} {...(rest as LinkProps)}>
      {children}
    </Link>
  )
}

export default Button
