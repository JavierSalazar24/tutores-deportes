import { useState } from 'react'

export const useModal = () => {
  const [modal, setModal] = useState(false)
  const [formData, setFormData] = useState({
    id: '',
    foto_url: '',
    nombre: '',
    apellido_p: '',
    apellido_m: '',
    genero: '',
    direccion: '',
    telefono: '',
    fecha_nacimiento: '',
    curp: '',
    padecimientos: '',
    alergias: ''
  })

  const openModal = (player) => {
    setModal(true)
    setFormData({
      id: player.id,
      foto_url: player.foto_url,
      nombre: player.nombre,
      apellido_p: player.apellido_p,
      apellido_m: player.apellido_m,
      genero: player.genero,
      direccion: player.direccion,
      telefono: player.telefono,
      fecha_nacimiento: player.fecha_nacimiento,
      curp: player.curp,
      padecimientos: player.padecimientos,
      alergias: player.alergias
    })
  }

  const closeModal = () => {
    setModal(false)
    setFormData({
      id: '',
      foto_url: '',
      nombre: '',
      apellido_p: '',
      apellido_m: '',
      genero: '',
      direccion: '',
      telefono: '',
      fecha_nacimiento: '',
      curp: '',
      padecimientos: '',
      alergias: ''
    })
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target
    const file = files?.[0]
    if (!file) return

    const previewURL = URL.createObjectURL(file)

    setFormData((prev) => ({
      ...prev,
      [name]: file,
      preview: previewURL
    }))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return {
    handleFileChange,
    handleInputChange,
    closeModal,
    openModal,
    modal,
    formData
  }
}
