import { useQuery } from '@tanstack/react-query'
import { getDocumentos } from '../api/documentos'

export const useDocumentos = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['documentos'],
    queryFn: getDocumentos
  })

  return {
    isLoading,
    isError,
    data,
    error
  }
}
