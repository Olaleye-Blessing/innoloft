import { FC } from 'react'

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: { value: string | number; label: string | number }[]
}

const Select: FC<Props> = ({ label, options, ...rest }) => {
  return (
    <div>
      <label
        htmlFor={rest.id}
        className='form__label'
      >
        {label}
      </label>
      <select {...rest} className='form__select'>
        {options.map((option, key) => (
          <option key={key} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
