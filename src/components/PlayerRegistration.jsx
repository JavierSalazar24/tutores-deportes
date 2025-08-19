import { usePlayerRegistration } from '../hook/usePlayerRegistration'
import { StepContent } from './StepContent'

const totalSteps = 5

const PlayerRegistration = ({
  onSubmit,
  sigCanvas,
  clearSignature,
  saveSignature,
  firma = null
}) => {
  const {
    currentStep,
    formData,
    handleChange,
    handleNext,
    handlePrev,
    handleFileChange,
    handleSubmit
  } = usePlayerRegistration({ firma, onSubmit })

  return (
    <div>
      {/* Progress Bar */}
      <div className='mb-8'>
        <div className='flex items-center justify-between mb-4 flex-col sm:flex-row'>
          <h2
            className='text-center text-2xl sm:text-3xl sm:text-left font-bold mb-2 sm:mb-0'
            style={{ color: '#e1251b' }}
          >
            Registrar nuevo jugador
          </h2>
          <span className='text-sm text-gray-500'>
            Paso {currentStep} de {totalSteps}
          </span>
        </div>
        <div className='w-full bg-gray-200 rounded-full h-2'>
          <div
            className='bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full transition-all duration-300'
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      <form>
        <StepContent
          key={currentStep}
          currentStep={currentStep}
          formData={formData}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
          sigCanvas={sigCanvas}
          clearSignature={clearSignature}
          saveSignature={saveSignature}
        />

        {/* Navigation Buttons */}
        <div className='flex justify-between mt-8 pt-6 border-t border-gray-200'>
          <button
            type='button'
            onClick={handlePrev}
            disabled={currentStep === 1}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              currentStep === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Anterior
          </button>

          {currentStep === totalSteps ? (
            <button
              type='button'
              onClick={handleSubmit}
              className='cursor-pointer px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl'
            >
              Guardar
            </button>
          ) : (
            <button
              type='button'
              onClick={handleNext}
              className='cursor-pointer px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200'
            >
              Siguiente
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default PlayerRegistration
