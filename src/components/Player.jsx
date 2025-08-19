import dayjs from 'dayjs'

export const Player = ({ player }) => {
  return (
    <div className='p-6'>
      <div className='flex items-center mb-4'>
        <div className='w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4'>
          <img
            className='rounded-full w-12 h-12'
            src={player.foto_url}
            alt={`${player.nombre} ${player.apellido_p} ${player.apellido_m}`}
          />
        </div>
        <div>
          <h3 className='text-xl font-semibold text-gray-800'>
            {player.nombre} {player.apellido_p} {player.apellido_m}
          </h3>
          <p className='text-sm font-medium' style={{ color: '#e1251b' }}>
            {player.categoria.nombre}
          </p>
        </div>
      </div>

      <div className='space-y-2 text-sm text-gray-600'>
        <div className='flex justify-between'>
          <span className='font-medium'>Edad:</span>
          <span>{dayjs().diff(player.fecha_nacimiento, 'year')} años</span>
        </div>
        {player.telefono && (
          <div className='flex justify-between'>
            <span className='font-medium'>Teléfono:</span>
            <span>{player.telefono}</span>
          </div>
        )}
        <div className='flex justify-between'>
          <span className='font-medium'>Ingreso:</span>
          <span>{dayjs(player.created_at).format('DD/MM/YYYY')}</span>
        </div>
      </div>
    </div>
  )
}
