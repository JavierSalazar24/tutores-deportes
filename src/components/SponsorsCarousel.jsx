import { useSponsorsCarousel } from '../hook/useSponsorsCarousel'

export default function SponsorsCarousel({ sponsors = [] }) {
  const {
    viewportRef,
    trackRef,
    groupRef,
    handleImgLoad,
    baseSet,
    ITEM_W,
    GAP,
    setsAfter
  } = useSponsorsCarousel(sponsors)

  if (!sponsors.length) return null

  return (
    <div
      ref={viewportRef}
      className='bg-white border-y border-gray-200 py-3 sm:py-5 overflow-hidden'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-12'>
        <h2 className='text-center text-lg sm:text-xl font-semibold text-gray-800 mb-6'>
          Nuestros Patrocinadores
        </h2>

        <div className='relative'>
          <div
            ref={trackRef}
            className='flex will-change-transform select-none'
            style={{ whiteSpace: 'nowrap' }}
          >
            <div ref={groupRef} className='flex'>
              {baseSet.map((s, i) => (
                <div
                  key={`g-${s._k}-${i}`}
                  className='flex-shrink-0'
                  style={{ width: ITEM_W, marginRight: GAP }}
                >
                  <div className='bg-gray-50 rounded-lg p-4 sm:p-6 h-24 sm:h-28 flex items-center justify-center transition-all'>
                    <img
                      src={s.foto_url}
                      alt={s.nombre}
                      className='max-w-full max-h-full object-contain'
                      draggable={false}
                      onLoad={handleImgLoad}
                    />
                  </div>
                </div>
              ))}
            </div>

            {Array.from({ length: setsAfter }).map((_, setIdx) => (
              <div key={`r-${setIdx}`} className='flex'>
                {baseSet.map((s, i) => (
                  <div
                    key={`r-${setIdx}-${s._k}-${i}`}
                    className='flex-shrink-0'
                    style={{ width: ITEM_W, marginRight: GAP }}
                  >
                    <div className='bg-gray-50 rounded-lg p-4 sm:p-6 h-24 sm:h-28 flex items-center justify-center transition-all'>
                      <img
                        src={s.foto_url}
                        alt={s.nombre}
                        className='max-w-full max-h-full object-contain'
                        draggable={false}
                        onLoad={handleImgLoad}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
