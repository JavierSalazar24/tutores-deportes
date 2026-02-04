import { Consents } from './StepRegistrationPlayer/Consents'
import { ContactInformation } from './StepRegistrationPlayer/ContactInformation'
import { Documentation } from './StepRegistrationPlayer/Documentation'
import { MedicalInformation } from './StepRegistrationPlayer/MedicalInformation'
import { PersonalInformation } from './StepRegistrationPlayer/PersonalInformation'
import { SignatureResponsible } from './StepRegistrationPlayer/SignatureResponsible'

export const StepContent = ({
  currentStep,
  formData,
  handleChange,
  handleFileChange,
  handleCheckboxChange,
  sigCanvas,
  clearSignature,
  saveSignature
}) => {
  switch (currentStep) {
    case 1:
      return (
        <div key='step-1' className='space-y-6'>
          <PersonalInformation
            handleFileChange={handleFileChange}
            formData={formData}
            handleChange={handleChange}
          />
        </div>
      )

    case 2:
      return (
        <div key='step-2' className='space-y-6'>
          <ContactInformation formData={formData} handleChange={handleChange} />
        </div>
      )

    case 3:
      return (
        <div key='step-3' className='space-y-6'>
          <MedicalInformation formData={formData} handleChange={handleChange} />
        </div>
      )

    case 4:
      return (
        <div key='step-4' className='space-y-6'>
          <Documentation handleFileChange={handleFileChange} />
        </div>
      )

    case 5:
      return (
        <div key='step-5' className='space-y-6'>
          <Consents
            formData={formData}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>
      )

    case 6:
      return (
        <div key='step-6' className='space-y-6'>
          <SignatureResponsible
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
