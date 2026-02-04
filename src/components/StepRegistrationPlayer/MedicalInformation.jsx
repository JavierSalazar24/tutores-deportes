import { Input } from '../Input'

export const MedicalInformation = ({ formData, handleChange }) => {
  return (
    <>
      <h3 className='text-xl font-semibold text-gray-900 mb-6'>
        Información Médica
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Input
          label='Padecimientos *'
          type='text'
          name='padecimientos'
          value={formData.padecimientos}
          onChange={handleChange}
          placeholder='Diabetes, etc...'
          required
        />
        <Input
          label='Alergias *'
          type='text'
          name='alergias'
          value={formData.alergias}
          onChange={handleChange}
          placeholder='Penicilina...'
          required
        />
      </div>
    </>
  )
}
