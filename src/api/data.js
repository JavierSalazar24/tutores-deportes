import { apiClient } from './configAxios'

export const getData = async () => {
  try {
    const response = await apiClient.get('jugadores-web')
    const { data } = response

    return data
  } catch (error) {
    console.error('Error al obetener el registro', error)
    throw new Error(error.response.data.message)
  }
}
