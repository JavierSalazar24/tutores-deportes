import { useQuery } from '@tanstack/react-query'
import { getData } from '../api/data'

export const useData = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['data-jugadores'],
    queryFn: getData
  })

  return {
    isLoading,
    isError,
    data,
    error
  }
}
