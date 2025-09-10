import { Eye } from 'lucide-react'

export const InputField = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
  required,
  disabled,
  opcSelect = [],
  accept = '',
  classInput = 'md:col-span-1',
  document = false,
  autofocus = false,
  step = '0.01',
  multiple = false,
  placeholder = ''
}) => {
  return (
    <div className={`sm:col-span-6 ${classInput}`}>
      <div className='flex justify-between'>
        <label
          htmlFor={name}
          className='block text-sm font-medium text-gray-700'
        >
          {label}
        </label>
        {document && (
          <a
            href={document}
            target='_blank'
            className='text-sm text-gray-700 hover:opacity-80 cursor-pointer'
          >
            <Eye className='h-6' />
          </a>
        )}
      </div>
      <div className='mt-1'>
        {type === 'select' ? (
          <select
            name={name}
            id={name}
            defaultValue={value || ''}
            onChange={onChange}
            disabled={disabled}
            required={required}
            className='shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border disabled:bg-gray-100'
          >
            {opcSelect.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        ) : type === 'file' ? (
          <>
            <input
              accept={accept}
              type={type}
              name={name}
              id={name}
              multiple={multiple}
              onChange={onChange}
              disabled={disabled}
              required={required}
              className='shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border disabled:bg-gray-100'
            />
          </>
        ) : type === 'textarea' ? (
          <textarea
            name={name}
            id={name}
            defaultValue={value || ''}
            onChange={onChange}
            disabled={disabled}
            required={required}
            className='shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border disabled:bg-gray-100'
          />
        ) : type === 'number' ? (
          <input
            type={type}
            name={name}
            autoFocus={autofocus}
            id={name}
            defaultValue={value || ''}
            placeholder={placeholder}
            onChange={(e) => {
              const v = parseFloat(e.target.value)
              if (v >= 0 || isNaN(v)) onChange(e)
            }}
            onKeyDown={(e) => {
              if (['e', 'E', '+', '-'].includes(e.key)) {
                e.preventDefault()
              }
            }}
            onWheel={(e) => e.target.blur()}
            disabled={disabled}
            required={required}
            step={step}
            min={0}
            className='shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border disabled:bg-gray-100'
          />
        ) : (
          <input
            type={type}
            name={name}
            autoFocus={autofocus}
            id={name}
            defaultValue={value || ''}
            onChange={onChange}
            disabled={disabled}
            required={required}
            className='shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border disabled:bg-gray-100'
          />
        )}
      </div>
    </div>
  )
}
