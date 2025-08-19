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
    <div className='flex min-h-screen items-center justify-center bg-primary-dark p-4'>
      <Toaster richColors position='bottom-right' />
      <div className='mx-auto w-full max-w-md rounded-lg bg-white p-6 shadow-md'>
        <div className='mb-6 flex justify-center'>
          <div className='h-24 w-24 overflow-hidden rounded-full bg-primary/10'>
            <img
              src={logo}
              alt='Logo del club potros'
              className='h-full w-full object-contain'
            />
          </div>
        </div>

        <div className='mb-6 text-center'>
          <h2 className='text-gray-900 text-2xl font-bold'>Registrarse</h2>
          <p className='text-sm'>
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
              className='block text-sm font-medium text-gray-700'
            >
              Nombre completo
            </label>
            <div className='mt-1'>
              <input
                id='nombre_completo'
                name='nombre_completo'
                type='text'
                placeholder='Javier Salazar'
                required
                className='shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border disabled:bg-gray-100'
              />
            </div>
          </div>

          <div className='space-y-2'>
            <label
              htmlFor='telefono'
              className='block text-sm font-medium text-gray-700'
            >
              Celular
            </label>
            <div className='mt-1'>
              <input
                id='telefono'
                name='telefono'
                type='tel'
                placeholder='5552948309'
                required
                className='shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border disabled:bg-gray-100'
              />
            </div>
          </div>

          <div className='space-y-2'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Correo
            </label>
            <div className='mt-1'>
              <input
                id='email'
                name='email'
                type='email'
                placeholder='example@email.com'
                required
                className='shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border disabled:bg-gray-100'
              />
            </div>
          </div>

          <div className='space-y-2'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'
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
                className='shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border disabled:bg-gray-100'
              />
              <button
                type='button'
                className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type='submit'
            disabled={loading}
            className='w-full h-11 disabled:cursor-auto disabled:bg-primary/80 py-2 bg-primary text-white font-semibold rounded-md cursor-pointer hover:bg-primary-dark transition-all flex justify-center gap-3 items-center'
          >
            Registrarse {loading && <div className='loader-loading'></div>}
          </button>
        </form>
      </div>
    </div>
  )
}
