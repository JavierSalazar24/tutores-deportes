export const FinancesTabContent = ({
  activeTab,
  records = [],
  search,
  setSearch
}) => {
  const filteredFinances = records || []

  const q = (search || '').trim().toLowerCase()
  const visibleFinances = q
    ? filteredFinances.filter(
        (r) =>
          (r.playerName || '').toLowerCase().includes(q) ||
          (r.description || '').toLowerCase().includes(q)
      )
    : filteredFinances

  const icon =
    activeTab === 'deudas' ? '⚠️' : activeTab === 'pagos' ? '✅' : '💳'

  const colorClass =
    activeTab === 'deudas'
      ? 'text-red-600'
      : activeTab === 'pagos'
      ? 'text-green-600'
      : 'text-blue-600'

  return (
    <div className='bg-white rounded-lg shadow-lg'>
      <div className='p-6 border-b border-gray-200'>
        <div className='flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4'>
          <h3 className={`text-xl font-semibold ${colorClass} capitalize`}>
            {activeTab}
          </h3>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Buscar jugador o descripción...'
            className='w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none'
          />
        </div>
      </div>
      <div className='divide-y divide-gray-200'>
        {visibleFinances.map((record) => (
          <div
            key={record.id}
            className='p-6 hover:bg-gray-50 transition-colors'
          >
            {/* Desktop */}
            <div className='hidden sm:flex items-center justify-between'>
              <div className='flex items-center space-x-4'>
                <div className='text-2xl'>{icon}</div>
                <div>
                  <h4 className='font-semibold text-gray-800'>
                    {record.playerName}
                  </h4>
                  <p className='text-sm text-gray-600'>{record.description}</p>
                  <p className='text-xs text-gray-500'>{record.date}</p>
                </div>
              </div>
              <div className='text-right'>
                <p className={`text-lg font-bold ${colorClass}`}>
                  {record.amount}
                </p>
              </div>
            </div>

            {/* Móvil */}
            <div className=' sm:hidden'>
              <div className='flex items-center justify-center'>
                <div className='text-xl'>{icon}</div>
                <h4 className='text-lg font-semibold text-gray-800'>
                  {record.playerName}
                </h4>
              </div>
              <div className='text-center mt-3'>
                <p className='text-sm text-gray-600'>{record.description}</p>
                <p className='text-sm text-gray-500'>{record.date}</p>
              </div>
              <div className='text-center mt-3'>
                <p className={`text-base font-bold ${colorClass}`}>
                  Costo de {record.amount}
                </p>
              </div>
            </div>
          </div>
        ))}

        {visibleFinances.length === 0 && (
          <div className='text-center py-8'>
            <p className='text-gray-500'>No hay {activeTab} registradas</p>
          </div>
        )}
      </div>
    </div>
  )
}
