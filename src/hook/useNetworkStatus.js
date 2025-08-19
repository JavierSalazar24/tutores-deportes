import { useEffect, useState } from 'react'

export function useNetworkStatus() {
  const [isOffline, setIsOffline] = useState(
    typeof navigator !== 'undefined' ? !navigator.onLine : false
  )
  const [showOnlineBanner, setShowOnlineBanner] = useState(false)

  useEffect(() => {
    let timer = null
    const handleOnline = () => {
      setIsOffline(false)
      setShowOnlineBanner(true)
      timer && clearTimeout(timer)
      timer = setTimeout(() => setShowOnlineBanner(false), 3000)
    }
    const handleOffline = () => {
      setIsOffline(true)
      setShowOnlineBanner(false)
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
      if (timer) clearTimeout(timer)
    }
  }, [])

  return { isOffline, showOnlineBanner }
}
