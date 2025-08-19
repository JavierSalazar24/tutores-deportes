import dayjs from 'dayjs'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import esLocale from '@fullcalendar/core/locales/es'
import 'dayjs/locale/es'
import { useCalendar } from '../hook/useCalendar'
import { ModalCalendar } from './ModalCalendar'

dayjs.locale('es')

const Calendar = ({ partidos }) => {
  const {
    eventoSeleccionado,
    eventos,
    handleEventClick,
    setEventoSeleccionado
  } = useCalendar({ partidos })

  function Evento(arg) {
    const { foto, rival, lugar } = arg.event.extendedProps
    return (
      <div className='cursor-pointer flex items-center gap-2 bg-white shadow-md rounded-md px-2 py-1 border border-gray-100 transition-shadow duration-200'>
        <img
          src={foto || '/img/avatar_placeholder.png'}
          alt={rival}
          className='w-7 h-7 rounded-full object-cover border border-gray-300 flex-shrink-0'
        />
        <div className='flex flex-col min-w-0'>
          <span className='text-xs text-gray-600 truncate-event'>{lugar}</span>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h2
        className='text-2xl text-center sm:text-3xl sm:text-left font-bold mb-6'
        style={{ color: '#e1251b' }}
      >
        Calendario de partidos
      </h2>

      <div className='bg-white rounded-lg shadow-lg p-2 sm:p-8'>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView='dayGridMonth'
          events={eventos}
          eventContent={Evento}
          eventClick={handleEventClick}
          height='auto'
          locale={esLocale}
        />

        {eventoSeleccionado && (
          <ModalCalendar
            setEventoSeleccionado={setEventoSeleccionado}
            eventoSeleccionado={eventoSeleccionado}
          />
        )}
      </div>
    </div>
  )
}

export default Calendar
