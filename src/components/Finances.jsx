import { formatearMonedaMXN } from '../utils/formattedCurrancy'
import { useFinances } from '../hook/useFinances'
import { FinancesTabContent } from './FinancesTabContent'

const Finances = ({
  deudas = [],
  abonos = [],
  pagos = [],
  totalDeudas = 0,
  totalAbonos = 0,
  totalPagos = 0
}) => {
  const { activeTab, setActiveTab, search, setSearch, financesByTab, counts } =
    useFinances({ deudas, abonos, pagos })

  return (
    <div>
      <div className='mb-6 text-center sm:text-left'>
        <h2
          className='text-2xl sm:text-3xl font-bold'
          style={{ color: '#e1251b' }}
        >
          Deudas/Abonos/Pagos
        </h2>
      </div>

      {/* Resumen financiero */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
        <div className='bg-white rounded-lg shadow-lg p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm font-medium text-gray-600'>
                Total Deudas (saldo restante)
              </p>
              <p className='text-2xl font-bold text-red-600'>
                {formatearMonedaMXN(totalDeudas)}
              </p>
            </div>
            <div className='text-3xl'>⚠️</div>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm font-medium text-gray-600'>Total Abonos</p>
              <p className='text-2xl font-bold text-blue-600'>
                {formatearMonedaMXN(totalAbonos)}
              </p>
            </div>
            <div className='text-3xl'>💵</div>
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm font-medium text-gray-600'>Total Pagos</p>
              <p className='text-2xl font-bold text-green-600'>
                {formatearMonedaMXN(totalPagos)}
              </p>
            </div>
            <div className='text-3xl'>✅</div>
          </div>
        </div>
      </div>

      <div className='bg-white rounded-lg shadow-lg mb-6'>
        <div className='border-b border-gray-200'>
          <nav className='flex space-x-8 px-6'>
            {['deudas', 'abonos', 'pagos'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 sm:px-2 border-b-2 font-medium text-xs sm:text-sm capitalize transition-colors cursor-pointer ${
                  activeTab === tab
                    ? 'border-red-500 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab} ({counts[tab]})
              </button>
            ))}
          </nav>
        </div>
      </div>

      <FinancesTabContent
        key={activeTab}
        activeTab={activeTab}
        records={financesByTab[activeTab] || []}
        search={search}
        setSearch={setSearch}
      />
    </div>
  )
}

export default Finances
