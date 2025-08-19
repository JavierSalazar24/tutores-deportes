import { createContext, useContext, useEffect, useState } from 'react'
import {
  loginRequest,
  logoutRequest,
  getUserProfile,
  registerRequest
} from '../api/auth'
import { toast } from 'sonner'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const login = async (email, password) => {
    try {
      const response = await loginRequest({ email, password })
      const token = response.token
      localStorage.setItem('token', token)

      const profile = await getUserProfile()

      setUser(profile)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const register = async (userData) => {
    try {
      const response = await registerRequest(userData)
      const token = response.token
      localStorage.setItem('token', token)

      const profile = await getUserProfile()

      setUser(profile)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const logout = async () => {
    const response = await logoutRequest()
    console.log(response)

    localStorage.removeItem('token')
    setUser(null)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      setLoading(false)
      return
    }

    getUserProfile()
      .then((res) => setUser(res))
      .catch(() => {
        localStorage.removeItem('token')
        setUser(null)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) return null

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        register,
        logout,
        isAuthenticated: !!user,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
