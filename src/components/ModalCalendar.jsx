import dayjs from 'dayjs'

export const ModalCalendar = ({
  setEventoSeleccionado,
  eventoSeleccionado
}) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-black/40'>
      <div className='bg-white p-6 rounded-xl shadow-xl w-[90vw] max-w-sm relative'>
        <button
          className='absolute top-1 right-3 text-gray-400 hover:text-gray-700 cursor-pointer'
          onClick={() => setEventoSeleccionado(null)}
        >
          ✕
        </button>
        <div className='flex flex-col items-center gap-3'>
          <img
            src={
              eventoSeleccionado.extendedProps.foto ||
              '/img/avatar_placeholder.png'
            }
            alt={eventoSeleccionado.extendedProps.rival}
            className='w-32 h-32 rounded-full object-cover border p-2'
          />
          <div className='text-center'>
            <div className='flex justify-center mb-2'>
              <span className='inline-block bg-blue-100 text-blue-700 font-semibold text-xs px-3 py-1 rounded-full'>
                {eventoSeleccionado.extendedProps.categoria}
              </span>
            </div>
            <div className='font-bold text-lg mb-1'>
              Partido vs {eventoSeleccionado.extendedProps.rival}
            </div>
            <div className='text-gray-600 text-sm mb-2'>
              Lugar: {eventoSeleccionado.extendedProps.lugar}
            </div>
            <div className='text-gray-500 text-xs'>
              {dayjs(eventoSeleccionado.extendedProps.fecha_hora).format(
                'D [de] MMMM [de] YYYY, h:mm A'
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
