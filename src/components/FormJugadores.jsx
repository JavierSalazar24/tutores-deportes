import { formOptions } from '../forms/formJugadoresOptions'
import { AlertaCard } from './AlertaCard'
import { FotoCard } from './FotoCard'
import { InputField } from './InputField'

export const FormJugadores = ({
  formData,
  handleInputChange,
  handleFileChange
}) => {
  return (
    <>
      <div className='grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 md:grid-cols-2 mb-7'>
        <FotoCard
          handleFileChange={handleFileChange}
          view={false}
          formData={formData}
          document={true}
          title='Foto de perfil'
        />

        <div className='sm:col-span-6 md:col-span-2'>
          <AlertaCard text='Información personal' />
        </div>
        {formOptions.personalFields.map(
          ({ type, label, name, required, opcSelect }) => (
            <InputField
              key={name}
              type={type}
              label={label}
              name={name}
              required={required}
              value={formData[name] || ''}
              onChange={handleInputChange}
              disabled={false}
              opcSelect={opcSelect}
            />
          )
        )}

        <div className='sm:col-span-6 md:col-span-2'>
          <AlertaCard text='Documentos' />
        </div>
        {formOptions.documentFields.map(
          ({ type, label, name, accept, required }) => (
            <InputField
              key={name}
              type={type}
              accept={accept}
              label={label}
              required={required}
              name={name}
              value={formData[name] || ''}
              onChange={handleFileChange}
              document={null}
              disabled={false}
            />
          )
        )}
      </div>
    </>
  )
}
