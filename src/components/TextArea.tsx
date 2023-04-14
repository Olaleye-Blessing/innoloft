import { FC } from 'react'

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
}

const maxTextLength = 2_000

const TextArea: FC<Props> = ({ label, value, ...rest }) => {
  value = String(value).slice(0, maxTextLength)

  const textCount = String(value).length
  return (
    <div>
      <label htmlFor={rest.id} className='form__label'>
        {label}
      </label>
      <div className='relative'>
        <textarea
          {...rest}
          rows={10}
          name={rest.name}
          id={rest.id}
          className='form__input px-2 py-4'
          value={String(value).slice(0, maxTextLength)}
        />
        <div className='absolute top-1 right-5 text-xs bg-white'>
          {textCount} / {maxTextLength}
        </div>
      </div>
    </div>
  )
}

export default TextArea
