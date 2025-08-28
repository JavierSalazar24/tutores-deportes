import dayjs from 'dayjs'
import { useMemo, useState } from 'react'
import { formatearMonedaMXN } from '../utils/formattedCurrancy'

export const useFinances = ({ deudas, abonos, pagos }) => {
  const [activeTab, setActiveTab] = useState('deudas')
  const [search, setSearch] = useState('')

  const normalizeDeuda = (d) => ({
    id: d.id,
    type: 'deuda',
    playerName: `${d.jugador.nombre} ${d.jugador.apellido_p} ${d.jugador.apellido_m}`,
    description: `${d.costo_categoria.concepto_cobro.nombre} (${d.costo_categoria.categoria.nombre})`,
    date: dayjs(d.fecha_pago).format('DD/MM/YYYY'),
    amount: formatearMonedaMXN(d.monto_final),
    restant: formatearMonedaMXN(d.saldo_restante)
  })

  const normalizeAbono = (a) => ({
    id: a?.id,
    type: 'abono',
    playerName: `${a.deuda_jugador.jugador.nombre} ${a.deuda_jugador.jugador.apellido_p} ${a.deuda_jugador.jugador.apellido_m}`,
    description: `${a.deuda_jugador.costo_categoria.concepto_cobro.nombre} (${a.deuda_jugador.costo_categoria.categoria.nombre})`,
    date: dayjs(a.fecha_pago).format('DD/MM/YYYY'),
    amount: formatearMonedaMXN(a.monto)
  })

  const normalizePago = (p) => ({
    id: p.id,
    type: 'pago',
    playerName: `${p.jugador.nombre} ${p.jugador.apellido_p} ${p.jugador.apellido_m}`,
    description: `${p.costo_categoria.concepto_cobro.nombre} (${p.costo_categoria.categoria.nombre})`,
    date: dayjs(p.fecha_pago).format('DD/MM/YYYY'),
    amount: formatearMonedaMXN(p.monto_final),
    restant: formatearMonedaMXN(p.saldo_restante)
  })

  const financesByTab = useMemo(
    () => ({
      deudas: (deudas || []).map(normalizeDeuda),
      abonos: (abonos || []).map(normalizeAbono),
      pagos: (pagos || []).map(normalizePago)
    }),
    [deudas, abonos, pagos]
  )

  const counts = useMemo(
    () => ({
      deudas: financesByTab.deudas.length,
      abonos: financesByTab.abonos.length,
      pagos: financesByTab.pagos.length
    }),
    [financesByTab]
  )

  return {
    activeTab,
    setActiveTab,
    search,
    setSearch,
    financesByTab,
    counts
  }
}
