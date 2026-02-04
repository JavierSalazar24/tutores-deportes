import { Input } from '../Input'

export const PersonalInformation = ({
  handleFileChange,
  formData,
  handleChange
}) => {
  return (
    <>
      <h3 className='text-xl font-semibold text-gray-900 mb-6'>
        Información Personal
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='col-span-2'>
          <Input
            label='Foto del jugador *'
            type='file'
            name='foto'
            onChange={handleFileChange}
            accept='image/*'
            required
          />
        </div>
        <Input
          label='Nombre *'
          type='text'
          name='nombre'
          value={formData.nombre}
          onChange={handleChange}
          placeholder='Javier'
          required
        />
        <Input
          label='Apellido paterno *'
          type='text'
          name='apellido_p'
          value={formData.apellido_p}
          onChange={handleChange}
          placeholder='Salazar'
          required
        />
        <Input
          label='Apellido materno *'
          type='text'
          name='apellido_m'
          value={formData.apellido_m}
          onChange={handleChange}
          placeholder='Torres'
          required
        />
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Género *
          </label>
          <select
            name='genero'
            value={formData.genero}
            onChange={handleChange}
            required
            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors outline-none'
          >
            <option value=''>Selecciona una opción</option>
            <option value='Hombre'>Hombre</option>
            <option value='Mujer'>Mujer</option>
          </select>
        </div>
      </div>
    </>
  )
}
