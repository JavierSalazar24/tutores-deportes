import { useAuth } from '../context/AuthContext'
import AuthScreen from './AuthScreen'
import Loading from './Loading'

export const AuthGate = ({ children }) => {
  const { isAuthenticated, loading } = useAuth()
  if (loading || isAuthenticated === null) return <Loading />
  if (!isAuthenticated) return <AuthScreen />
  return children
}
