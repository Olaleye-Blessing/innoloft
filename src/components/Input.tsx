import { FC } from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input: FC<Props> = ({ type = 'text', label, ...rest }) => {
  return (
    <div>
      <label htmlFor={rest.id} className='form__label'>
        {label}
      </label>
      <input {...rest} type={type} className='form__input px-2' />
    </div>
  )
}

export default Input
