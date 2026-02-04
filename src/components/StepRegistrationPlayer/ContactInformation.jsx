import { Input } from '../Input'

export const ContactInformation = ({ formData, handleChange }) => {
  return (
    <>
      <h3 className='text-xl font-semibold text-gray-900 mb-6'>
        Información de Contacto
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Input
          label='Dirección completa *'
          type='text'
          name='direccion'
          value={formData.direccion}
          onChange={handleChange}
          placeholder='Calle, número, colonia, ciudad...'
          required
        />
        <Input
          label='Celular *'
          type='tel'
          name='telefono'
          value={formData.telefono}
          onChange={handleChange}
          placeholder='555-123-4567'
          required
        />
        <Input
          label='Fecha de Nacimiento *'
          type='date'
          name='fecha_nacimiento'
          value={formData.fecha_nacimiento}
          onChange={handleChange}
          required
        />
        <Input
          label='CURP *'
          type='text'
          name='curp'
          value={formData.curp}
          onChange={handleChange}
          placeholder='SAT00407...'
          required
        />
      </div>
    </>
  )
}
