import { apiClientForm } from './configAxios'

// Crear un registro
export const createJugador = async (data) => {
  try {
    const formData = new FormData()
    formData.append('nombre', data.nombre)
    formData.append('apellido_p', data.apellido_p)
    formData.append('apellido_m', data.apellido_m)
    formData.append('genero', data.genero)
    formData.append('direccion', data.direccion)
    formData.append('telefono', data.telefono)
    formData.append('fecha_nacimiento', data.fecha_nacimiento)
    formData.append('curp', data.curp)
    formData.append('padecimientos', data.padecimientos)
    formData.append('alergias', data.alergias)
    if (data.foto instanceof File) {
      formData.append('foto', data.foto)
    }
    if (data.curp_jugador instanceof File) {
      formData.append('curp_jugador', data.curp_jugador)
    }
    if (data.ine instanceof File) {
      formData.append('ine', data.ine)
    }
    if (data.acta_nacimiento instanceof File) {
      formData.append('acta_nacimiento', data.acta_nacimiento)
    }
    if (data.comprobante_domicilio instanceof File) {
      formData.append('comprobante_domicilio', data.comprobante_domicilio)
    }
    if (data.firma instanceof File) {
      formData.append('firma', data.firma)
    }

    const response = await apiClientForm.post('jugadores-web', formData)
    return response.data
  } catch (error) {
    console.error('Error al agregar el registro:', error.response.data.message)
    throw new Error(error.response.data.message)
  }
}
