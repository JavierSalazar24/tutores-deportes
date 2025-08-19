import { useState } from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

export default function AuthScreen() {
  const [mode, setMode] = useState('register')

  return (
    <div className=''>
      {mode === 'login' ? (
        <LoginForm setMode={setMode} />
      ) : (
        <RegisterForm setMode={setMode} />
      )}
    </div>
  )
}
