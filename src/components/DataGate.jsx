import { useData } from '../hook/useData'
import Loading from './Loading'

export const DataGate = ({ children }) => {
  const { data, isError, isLoading, error } = useData()
  if (isLoading) return <Loading />
  if (isError) return <div>{error?.message || 'Error al cargar datos'}</div>
  return typeof children === 'function' ? children(data) : children
}
