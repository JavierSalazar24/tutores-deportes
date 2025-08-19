import SignatureCanvas from 'react-signature-canvas'
import { Save, SquareX } from 'lucide-react'

export const SignatureInput = ({
  sigCanvas,
  clearSignature,
  saveSignature
}) => {
  return (
    <div className='sm:col-span-6 md:col-span-1'>
      <SignatureCanvas
        ref={sigCanvas}
        canvasProps={{
          className: 'border-5 border-[#27548A] border-double w-full h-60'
        }}
      />

      <div className='flex mt-4 flex-col items-center gap-3 justify-center sm:flex-row sm:justify-around'>
        <button
          onClick={clearSignature}
          type='button'
          className='py-2 px-4 bg-red-500 rounded-sm text-white flex items-center gap-2 cursor-pointer hover:bg-red-700 transition-all'
        >
          <SquareX /> Limpiar firma
        </button>

        <button
          onClick={saveSignature}
          type='button'
          className='py-2 px-4 bg-[#1F7D53] rounded-sm text-white flex items-center gap-2 cursor-pointer hover:bg-[#255F38] transition-all'
        >
          <Save /> Guardar firma
        </button>
      </div>
    </div>
  )
}
