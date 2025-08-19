import logo from '../assets/logo.png'

const Header = ({ temporada }) => {
  return (
    <header className='bg-white border-b border-gray-200 shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 sm:h-20'>
          <div className='flex items-center space-x-3 sm:space-x-4'>
            <div className='w-10 h-10 p-2 sm:w-12 sm:h-12 bg-gradient-to-br bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-xl border-[1.5px] border-[#e1251b]'>
              <img src={logo} alt='Logo de la empresa' />
            </div>

            <div>
              <h1 className='text-lg sm:text-2xl font-bold text-gray-900'>
                Club Deportivo Arcanix
              </h1>
              <p className='text-xs sm:text-sm text-gray-500'>
                Sistema de gestión de jugadores
              </p>
            </div>
          </div>

          <div className='hidden lg:flex items-center space-x-6'>
            <div className='text-right'>
              <p className='text-sm font-medium text-gray-900'>
                {temporada.nombre}
              </p>
              <p className='text-xs text-gray-500'>En curso</p>
            </div>
            <div className='w-px h-8 bg-gray-300'></div>
            <div className='text-right'>
              <p className='text-sm font-medium text-gray-900'>Fundado 1985</p>
              <p className='text-xs text-gray-500'>39 años</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
