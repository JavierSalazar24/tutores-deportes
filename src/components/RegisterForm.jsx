import logo from '../assets/logo.png'
import { useAuth } from '../context/AuthContext'
import { toast, Toaster } from 'sonner'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export default function RegisterForm({ setMode }) {
  const { register } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    try {
      await register(data)
    } catch (error) {
      console.log(error)
      toast.error('Credenciales inválidas')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-dark via-primary to-primary-dark p-4 relative overflow-hidden'>
      <Toaster richColors position='bottom-right' />
      <div className='relative z-10 mx-auto w-full max-w-md'>
        <div className='bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20'>
          <div className='mb-8 flex justify-center'>
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-full blur-xl opacity-50' />
              <div className='relative h-28 w-28 overflow-hidden rounded-full bg-gradient-to-br from-primary/20 to-primary-dark/20 p-1 shadow-lg'>
                <div className='h-full w-full rounded-full bg-white p-1'>
                  <img
                    src={logo}
                    alt='Logo del club'
                    className='h-full w-full object-cover rounded-full'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='mb-8 text-center'>
            <h2 className='text-3xl font-bold text-gray-900 mb-2'>
              Registrarse
            </h2>
            <p className='text-sm text-gray-500'>
              ¿Ya tienes una cuenta?{' '}
              <button
                type='button'
                onClick={() => setMode('login')}
                className='text-blue-500 cursor-pointer hover:underline'
              >
                Inicia sesión
              </button>
            </p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='space-y-2'>
              <label
                htmlFor='nombre_completo'
                className='block text-sm font-semibold text-gray-700 mb-2'
              >
                Nombre completo
              </label>
              <div className='relative'>
                <input
                  id='nombre_completo'
                  name='nombre_completo'
                  type='text'
                  placeholder='Javier Salazar'
                  required
                  className='w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 bg-gray-50 focus:bg-white'
                />
              </div>
            </div>

            <div className='space-y-2'>
              <label
                htmlFor='telefono'
                className='block text-sm font-semibold text-gray-700 mb-2'
              >
                Celular
              </label>
              <div className='relative'>
                <input
                  id='telefono'
                  name='telefono'
                  type='tel'
                  placeholder='5552948309'
                  required
                  className='w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 bg-gray-50 focus:bg-white'
                />
              </div>
            </div>

            <div className='space-y-2'>
              <label
                htmlFor='email'
                className='block text-sm font-semibold text-gray-700 mb-2'
              >
                Correo
              </label>
              <div className='relative'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='example@email.com'
                  required
                  className='w-full px-4 py-3 text-sm border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 bg-gray-50 focus:bg-white'
                />
              </div>
            </div>

            <div className='space-y-2'>
              <label
                htmlFor='password'
                className='block text-sm font-semibold text-gray-700 mb-2'
              >
                Contraseña
              </label>
              <div className='relative'>
                <input
                  id='password'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='••••••••'
                  required
                  className='w-full px-4 py-3 pr-12 text-sm border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 bg-gray-50 focus:bg-white'
                />
                <button
                  type='button'
                  className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type='submit'
              disabled={loading}
              className='w-full flex justify-center items-center gap-2 py-3.5 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-xl cursor-pointer hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0 text-lg'
            >
              Registrarse {loading && <div className='loader-loading'></div>}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
