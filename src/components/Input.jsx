export const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  accept,
  required
}) => {
  return (
    <div className='col-span-2 md:col-span-1'>
      <label className='block text-sm font-medium text-gray-700 mb-2'>
        {label}
      </label>
      {type === 'file' ? (
        <input
          type={type}
          name={name}
          onChange={onChange}
          accept={accept}
          className='cursor-pointer w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors outline-none'
          required={required}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value ?? ''}
          onChange={onChange}
          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors outline-none'
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  )
}
