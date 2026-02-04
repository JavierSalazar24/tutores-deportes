import { Input } from '../Input'

export const Documentation = ({ handleFileChange }) => {
  return (
    <>
      <h3 className='text-xl font-semibold text-gray-900 mb-6'>
        Documentación
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Input
          label='CURP del jugador (PDF) *'
          type='file'
          name='curp_jugador'
          onChange={handleFileChange}
          accept='application/pdf'
          required
        />
        <Input
          label='Acta de nacimiento del jugador (PDF) *'
          type='file'
          name='acta_nacimiento'
          onChange={handleFileChange}
          accept='application/pdf'
          required
        />
        <Input
          label='INE del responsable (PDF) *'
          type='file'
          name='ine'
          onChange={handleFileChange}
          accept='application/pdf'
          required
        />
        <Input
          label='Comprobante de domicilio (PDF) *'
          type='file'
          name='comprobante_domicilio'
          onChange={handleFileChange}
          accept='application/pdf'
          required
        />
      </div>
    </>
  )
}
