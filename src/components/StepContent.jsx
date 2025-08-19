import { Input } from './Input'
import { SignatureInput } from './SignatureInput'

export const StepContent = ({
  currentStep,
  formData,
  handleChange,
  handleFileChange,
  sigCanvas,
  clearSignature,
  saveSignature
}) => {
  switch (currentStep) {
    case 1:
      return (
        <div key='step-1' className='space-y-6'>
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
        </div>
      )

    case 2:
      return (
        <div key='step-2' className='space-y-6'>
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
        </div>
      )

    case 3:
      return (
        <div key='step-3' className='space-y-6'>
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
        </div>
      )

    case 4:
      return (
        <div key='step-4' className='space-y-6'>
          <h3 className='text-xl font-semibold text-gray-900 mb-6'>
            Documentación
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <Input
              label='CURP del jugador (PDF)'
              type='file'
              name='curp_jugador'
              onChange={handleFileChange}
              accept='application/pdf'
            />
            <Input
              label='Acta de nacimiento del jugador (PDF)'
              type='file'
              name='acta_nacimiento'
              onChange={handleFileChange}
              accept='application/pdf'
            />
            <Input
              label='INE del responsable (PDF)'
              type='file'
              name='ine'
              onChange={handleFileChange}
              accept='application/pdf'
            />
            <Input
              label='Comprobante de domicilio (PDF)'
              type='file'
              name='comprobante_domicilio'
              onChange={handleFileChange}
              accept='application/pdf'
            />
          </div>
        </div>
      )

    case 5:
      return (
        <div key='step-5' className='space-y-6'>
          <h3 className='text-xl font-semibold text-gray-900 mb-6'>
            Firma del responsable
          </h3>

          <SignatureInput
            sigCanvas={sigCanvas}
            clearSignature={clearSignature}
            saveSignature={saveSignature}
          />
        </div>
      )

    default:
      return null
  }
}
