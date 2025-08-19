import { LogOut } from 'lucide-react'
import { navItems } from '../config/navItems'
import { toast } from 'sonner'
import { logoutRequest } from '../api/auth'

const Navigation = ({ activeSection, setActiveSection }) => {
  const handleLogout = async () => {
    try {
      await logoutRequest()

      window.location.reload()
    } catch (error) {
      toast.error('Error al cerrar sesión')
      console.log(error)
    }
  }

  return (
    <nav className='bg-white border-b border-gray-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex space-x-2 sm:space-x-8 overflow-x-auto scrollbar-hide'>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`cursor-pointer group relative px-2 sm:px-1 py-4 text-xs sm:text-sm font-medium transition-colors duration-200 flex items-center space-x-1 sm:space-x-2 whitespace-nowrap flex-shrink-0 mb-2 sm:mb-0 ${
                activeSection === item.id
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300'
              }`}
            >
              <div
                className={`transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-red-600'
                    : 'text-gray-400 group-hover:text-gray-500'
                }`}
              >
                {item.icon}
              </div>
              <span className='block sm:block'>{item.label}</span>
            </button>
          ))}
          <button
            onClick={handleLogout}
            className='cursor-pointer group relative px-2 sm:px-1 py-4 text-xs sm:text-sm font-medium transition-colors duration-200 flex items-center space-x-1 sm:space-x-2 whitespace-nowrap flex-shrink-0 text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300'
          >
            <div className='transition-colors duration-200 text-gray-400 group-hover:text-gray-500'>
              <LogOut className='w-4' />
            </div>
            <span className='block sm:block'>Cerrar sesión</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
