import { useState } from 'react'
import { Player } from './Player'
import { BaseForm } from './BaseForm'
import { useModal } from '../hook/useModal'

const PlayersList = ({ players, handleSubmit }) => {
  const {
    formData,
    modal,
    closeModal,
    openModal,
    handleFileChange,
    handleInputChange
  } = useModal()
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPlayers = players.filter((player) => {
    const nombre = `${player.nombre} ${player.apellido_p} ${player.apellido_m}`
    const matchesSearch = nombre
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    return matchesSearch
  })

  return (
    <>
      {modal && (
        <BaseForm
          closeModal={closeModal}
          formData={formData}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          handleFileChange={handleFileChange}
        />
      )}
      <div>
        <div className='mb-8'>
          <h2
            className='text-2xl sm:text-3xl text-center sm:text-left font-bold mb-6'
            style={{ color: '#e1251b' }}
          >
            Jugadores registrados ({players.length})
          </h2>

          <div className='bg-white rounded-lg shadow-lg p-6 mb-6'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Buscar por nombre
              </label>
              <input
                type='text'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent'
                placeholder='Buscar jugador...'
              />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredPlayers.map((player) => (
            <div
              key={player.id}
              className='bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer'
              onClick={() => openModal(player)}
            >
              <Player player={player} />
            </div>
          ))}
        </div>

        {filteredPlayers.length === 0 && (
          <div className='text-center py-12'>
            <div className='text-gray-400 text-6xl mb-4'>👥</div>
            <h3 className='text-xl font-semibold text-gray-600 mb-2'>
              No se encontraron jugadores
            </h3>
            <p className='text-gray-500'>
              {searchTerm
                ? 'Intenta ajustar la búsqueda'
                : 'Aún no hay jugadores registrados'}
            </p>
          </div>
        )}
      </div>
    </>
  )
}

export default PlayersList
