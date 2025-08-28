import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'

export const useSponsorsCarousel = (sponsors) => {
  const viewportRef = useRef(null) // overflow hidden
  const trackRef = useRef(null) // tira que se mueve (transform)
  const groupRef = useRef(null) // PRIMER set para medir loopWidth

  const rafRef = useRef(null)
  const posRef = useRef(0)
  const lastRef = useRef(null)
  const loopWidthRef = useRef(0)

  // Ajustes de “tarjeta”
  const ITEM_W = 200 // ancho por card (puedes cambiarlo o hacerlo variable)
  const GAP = 24 // separación horizontal
  const SPEED = 60 // px/s

  // Base (un set)
  const baseSet = useMemo(
    () => sponsors.map((s, i) => ({ ...s, _k: `${s.id ?? i}` })),
    [sponsors]
  )

  // ¿Cuántos sets extra pinto después del primero?
  // mínimo 2 para ir “sobrado”
  const [setsAfter, setSetsAfter] = useState(2)
  const [ready, setReady] = useState(false)

  // Medir y decidir setsAfter suficientes para cubrir viewport
  useLayoutEffect(() => {
    if (!viewportRef.current || !groupRef.current) return
    const viewportW = viewportRef.current.getBoundingClientRect().width
    const firstSetW = groupRef.current.getBoundingClientRect().width

    // Si las imágenes aún no cargan, el ancho puede ser 0 → no marcamos listo
    if (firstSetW <= 0) return

    // loopWidth = ANCHO DEL PRIMER SET (clave para el bucle sin salto)
    loopWidthRef.current = firstSetW

    // Necesitamos que lo que viene DESPUÉS del primer set cubra al menos el viewport completo.
    // Por lo tanto, setsAfter >= ceil(viewportW / firstSetW) + 1 (uno extra por seguridad).
    const needed = Math.max(
      2,
      Math.ceil(viewportW / Math.max(1, firstSetW)) + 1
    )
    setSetsAfter(needed)
    setReady(true)
  }, [baseSet.length]) // si cambian sponsors, re-medimos

  // Re-medimos al cargar imágenes (porque cambian el ancho real)
  const handleImgLoad = () => {
    if (!viewportRef.current || !groupRef.current) return
    const firstSetW = groupRef.current.getBoundingClientRect().width
    if (firstSetW > 0) {
      loopWidthRef.current = firstSetW
      const viewportW = viewportRef.current.getBoundingClientRect().width
      const needed = Math.max(
        2,
        Math.ceil(viewportW / Math.max(1, firstSetW)) + 1
      )
      setSetsAfter(needed)
      setReady(true)
    }
  }

  // Animación: SOLO cuando ya tenemos loopWidth > 0
  useEffect(() => {
    if (!ready || !trackRef.current || !loopWidthRef.current) return

    posRef.current = 0
    lastRef.current = null

    const animate = (t) => {
      const loopW = loopWidthRef.current
      if (!loopW) {
        rafRef.current = requestAnimationFrame(animate)
        return
      }
      if (lastRef.current == null) lastRef.current = t
      const dt = (t - lastRef.current) / 1000
      lastRef.current = t

      posRef.current -= SPEED * dt
      if (posRef.current <= -loopW) {
        // truco seamless: en vez de volver a 0, saltamos UNA longitud de set
        posRef.current += loopW
      }

      trackRef.current.style.transform = `translate3d(${posRef.current}px,0,0)`
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [ready])

  // Recalcular en resize manteniendo el progreso visual
  useEffect(() => {
    const onResize = () => {
      const loopPrev = loopWidthRef.current || 1
      const progress = (Math.abs(posRef.current) % loopPrev) / loopPrev

      if (!viewportRef.current || !groupRef.current) return
      const viewportW = viewportRef.current.getBoundingClientRect().width
      const firstSetW = groupRef.current.getBoundingClientRect().width
      if (firstSetW > 0) {
        loopWidthRef.current = firstSetW
        const needed = Math.max(
          2,
          Math.ceil(viewportW / Math.max(1, firstSetW)) + 1
        )
        setSetsAfter(needed)
        posRef.current = -progress * loopWidthRef.current
        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(${posRef.current}px,0,0)`
        }
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return {
    viewportRef,
    trackRef,
    groupRef,
    handleImgLoad,
    baseSet,
    ITEM_W,
    GAP,
    setsAfter
  }
}
