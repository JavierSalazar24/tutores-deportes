import { useState } from 'react'

export const useCalendar = ({ partidos }) => {
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null)

  const eventos = partidos.map((partido) => ({
    id: partido.id,
    title: `Partido vs ${partido.rival}`,
    start: partido.fecha_hora,
    extendedProps: {
      categoria: partido.categoria.nombre,
      foto: partido.foto_url,
      rival: partido.rival,
      lugar: partido.lugar,
      fecha_hora: partido.fecha_hora
    }
  }))

  function handleEventClick(clickInfo) {
    setEventoSeleccionado(clickInfo.event)
  }

  return {
    eventoSeleccionado,
    eventos,
    handleEventClick,
    setEventoSeleccionado
  }
}
