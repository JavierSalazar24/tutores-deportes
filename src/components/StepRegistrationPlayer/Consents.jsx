import PdfViewer from './PdfViewer'
import { useDocumentos } from '../../hook/useDocumentos'
import Loading from '../Loading'

export const Consents = ({ formData, handleCheckboxChange }) => {
  const { data, isLoading, isError } = useDocumentos()

  if (isError) {
    return (
      <div className='text-center col-span-full'>
        <p className='font-bold text-amber-700 mt-5 text-xl'>
          Error al mostrar los documentos. Por favor, intenta nuevamente más
          tarde o contacta con la administración.
        </p>
      </div>
    )
  }

  return (
    <>
      <h3 className='text-xl font-semibold text-gray-900 mb-6'>
        Avisos y Consentimientos
      </h3>

      <div className='mb-4 bg-amber-600/20 p-4 rounded-lg border border-amber-600 text-amber-900 font-medium'>
        <label
          htmlFor='terminos'
          className='flex items-center gap-1 w-fit cursor-pointer text-xs lg:text-base'
        >
          <input
            type='checkbox'
            name='terminos'
            id='terminos'
            checked={formData.terminos}
            onChange={handleCheckboxChange}
            className='cursor-pointer'
            required
          />
          <span>
            Antes de continuar, revisa los 3 archivos. Al marcar la casilla,
            confirmas que los has leído y aceptas sus términos.{' '}
            <span className='text-red-600'>*</span>
          </span>
        </label>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {isLoading ? (
          <div className='col-span-full text-center'>
            <Loading />
            <p className='mt-3 text-amber-700 font-medium text-xl'>
              Cargando documentos<span className='animate-pulse'>...</span>
            </p>
          </div>
        ) : data.length > 0 ? (
          data.map((doc) => (
            <div className='border p-4 rounded-lg shadow-md' key={doc.id}>
              <h4 className='text-lg font-bold mb-4 text-center text-primary'>
                {doc.nombre}
              </h4>

              <PdfViewer file={doc.documento} />
            </div>
          ))
        ) : (
          <div className='text-center col-span-full'>
            <p className='font-bold text-green-600 mt-3 sm:text-xl'>
              No se han subido documentos para aceptar, solo selecciona la
              casilla y dale &quot;siguiente&quot;.
            </p>
          </div>
        )}
      </div>
    </>
  )
}
