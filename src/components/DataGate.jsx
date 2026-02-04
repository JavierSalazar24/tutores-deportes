import { useBanners } from '../hook/useBanners'
import { useData } from '../hook/useData'
import Loading from './Loading'

export const DataGate = ({ children }) => {
  const { data, isError, isLoading, error } = useData()
  const { banners, isLoading: isBannersLoading } = useBanners()

  if (isLoading || isBannersLoading) return <Loading />
  if (isError) return <div>{error?.message || 'Error al cargar datos'}</div>
  return typeof children === 'function'
    ? children(data, banners, isBannersLoading)
    : children
}
