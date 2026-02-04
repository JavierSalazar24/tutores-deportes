import { SignatureInput } from '../SignatureInput'

export const SignatureResponsible = ({
  sigCanvas,
  clearSignature,
  saveSignature
}) => {
  return (
    <>
      <h3 className='text-xl font-semibold text-gray-900 mb-6'>
        Firma del responsable
      </h3>

      <SignatureInput
        sigCanvas={sigCanvas}
        clearSignature={clearSignature}
        saveSignature={saveSignature}
      />
    </>
  )
}
