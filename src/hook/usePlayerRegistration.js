import { useState } from 'react'
import { toast } from 'sonner'

export const usePlayerRegistration = ({ firma, onSubmit, totalSteps }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Información Personal
    nombre: '',
    apellido_p: '',
    apellido_m: '',
    genero: '',

    // Información de Contacto
    direccion: '',
    telefono: '',
    fecha_nacimiento: '',
    curp: '',

    // Información Médica
    padecimientos: '',
    alergias: '',

    // Documentos
    foto: null,
    curp_jugador: null,
    acta_nacimiento: null,
    ine: null,
    comprobante_domicilio: null,

    // Avisos y Consentimientos
    terminos: false
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target
    setFormData({
      ...formData,
      [name]: checked
    })
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      if (
        (currentStep === 1 &&
          (!formData.nombre ||
            !formData.apellido_p ||
            !formData.apellido_m ||
            !formData.genero ||
            !formData.foto)) ||
        (currentStep === 2 &&
          (!formData.direccion ||
            !formData.telefono ||
            !formData.fecha_nacimiento ||
            !formData.curp)) ||
        (currentStep === 3 &&
          (!formData.padecimientos || !formData.alergias)) ||
        (currentStep === 4 &&
          (!formData.curp_jugador ||
            !formData.acta_nacimiento ||
            !formData.ine ||
            !formData.comprobante_domicilio)) ||
        (currentStep === 5 && !formData.terminos)
      ) {
        toast.warning('Por favor completa los campos obligatorios')
        return
      }
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target
    setFormData({
      ...formData,
      [name]: files && files.length ? files[0] : null
    })
  }

  const handleSubmit = async () => {
    if (!firma) {
      toast.warning('Por favor guarda tu firma')
      return
    }

    try {
      if (firma) {
        await onSubmit(formData)
        setCurrentStep(1)
        setFormData({
          nombre: '',
          apellido_p: '',
          apellido_m: '',
          genero: '',
          direccion: '',
          telefono: '',
          fecha_nacimiento: '',
          curp: '',
          padecimientos: '',
          alergias: '',
          foto: null,
          curp_jugador: null,
          acta_nacimiento: null,
          ine: null,
          comprobante_domicilio: null,
          terminos: false
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return {
    currentStep,
    formData,
    handleChange,
    handleCheckboxChange,
    handleNext,
    handlePrev,
    handleFileChange,
    handleSubmit
  }
}
