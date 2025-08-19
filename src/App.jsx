// App.jsx
import { Suspense, useState } from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Loading from './components/Loading'
import { useJugadores } from './hook/useJugadores'
import { Toaster } from 'sonner'
import OfflineBanner from './components/OfflineBanner'
import OnlineBanner from './components/OnlineBanner'
import { useNetworkStatus } from './hook/useNetworkStatus'
import { AuthGate } from './components/AuthGate'
import { DataGate } from './components/DataGate'
import { SectionSwitcher } from './components/SectionSwitcher'
import { navItems } from './config/navItems'

export default function App() {
  const jugadoresHook = useJugadores()
  const [activeSection, setActiveSection] = useState('players-list')
  const { isOffline, showOnlineBanner } = useNetworkStatus()

  return (
    <Suspense fallback={<Loading />}>
      {isOffline && <OfflineBanner />}
      {showOnlineBanner && <OnlineBanner />}

      <AuthGate>
        <DataGate>
          {(data) => (
            <div className='min-h-screen bg-gray-50'>
              <Toaster richColors position='bottom-right' />

              <Header temporada={data.temporada} />
              <Navigation
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                navItems={navItems}
              />
              <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8 lg:py-12'>
                <div className='bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-4 sm:p-6 lg:p-8'>
                  <SectionSwitcher
                    section={activeSection}
                    data={data}
                    jugadoresHook={jugadoresHook}
                  />
                </div>
              </main>
            </div>
          )}
        </DataGate>
      </AuthGate>
    </Suspense>
  )
}
