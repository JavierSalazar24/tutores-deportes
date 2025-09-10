import PlayerRegistration from './PlayerRegistration'
import PlayersList from './PlayersList'
import Finances from './Finances'
import Calendar from './Calendar'

export const SectionSwitcher = ({ section, data, jugadoresHook }) => {
  const {
    onSubmit,
    onUpdate,
    firma,
    sigCanvas,
    clearSignature,
    saveSignature
  } = jugadoresHook

  switch (section) {
    case 'register':
      return (
        <PlayerRegistration
          onSubmit={onSubmit}
          firma={firma}
          sigCanvas={sigCanvas}
          clearSignature={clearSignature}
          saveSignature={saveSignature}
        />
      )
    case 'players-list':
      return <PlayersList players={data.jugadores} handleSubmit={onUpdate} />
    case 'calendar':
      return <Calendar partidos={data.partidos} />
    case 'finances':
      return (
        <Finances
          deudas={data.deudas}
          abonos={data.abonos}
          pagos={data.pagos}
          totalDeudas={data.totalDeudas}
          totalAbonos={data.totalAbonos}
          totalPagos={data.totalPagos}
        />
      )
    default:
      return <PlayersList players={data.jugadores} />
  }
}
