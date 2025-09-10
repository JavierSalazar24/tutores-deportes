import { FormJugadores } from './FormJugadores'

export const BaseForm = ({
  closeModal,
  formData,
  handleSubmit,
  handleInputChange,
  handleFileChange
}) => {
  return (
    <div
      className='fixed inset-0 z-50 overflow-y-auto'
      aria-labelledby='modal-title'
      aria-modal='true'
    >
      <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center'>
        <div
          className='fixed inset-0 bg-black opacity-40 transition-opacity'
          aria-hidden='true'
          onClick={closeModal}
        ></div>
        <span
          className='hidden sm:inline-block sm:align-middle sm:h-screen'
          aria-hidden='true'
        >
          &#8203;
        </span>
        <div className='relative lg:max-w-[70%] md:max-w-[80%] sm:max-w-[90%] w-full inline-block align-bottom bg-white rounded-lg text-left shadow-xl transform transition-all'>
          <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-2xl'>
            <div className='sm:flex sm:items-start'>
              <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full'>
                <h3
                  className='text-lg leading-6 font-medium text-gray-900 mb-3'
                  id='modal-title'
                >
                  Editar registro
                </h3>
                <hr className='text-gray-300' />
                <div className='mt-2 mb-5 text-sm text-red-600 font-semibold'>
                  <p>* Campos obligatorios</p>
                </div>
                <div className='mt-4'>
                  <form>
                    <FormJugadores
                      formData={formData}
                      handleInputChange={handleInputChange}
                      handleFileChange={handleFileChange}
                    />

                    <hr className='text-gray-300' />

                    <div className='mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense'>
                      <button
                        type='button'
                        onClick={() => {
                          handleSubmit(formData)
                          closeModal()
                        }}
                        className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:col-start-2 sm:text-sm cursor-pointer transition-all'
                      >
                        Guardar cambios
                      </button>
                      <button
                        type='button'
                        onClick={closeModal}
                        className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:col-start-1 sm:text-sm cursor-pointer transition-all'
                      >
                        Cancelar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
