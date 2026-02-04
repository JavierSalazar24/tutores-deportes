import { useQuery } from '@tanstack/react-query'
import { getBanners } from '../api/banners'

export const useBanners = () => {
  const {
    isLoading,
    isError,
    data: banners,
    error
  } = useQuery({
    queryKey: ['banners'],
    queryFn: getBanners
  })

  return {
    isLoading,
    isError,
    banners,
    error
  }
}
