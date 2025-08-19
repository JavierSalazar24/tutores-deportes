import { toast } from 'sonner'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createJugador } from '../api/jugadores'
import Swal from 'sweetalert2'
import { useRef, useState } from 'react'
import { base64ToFile } from '../utils/base64ToFile'

export const useJugadores = () => {
  const sigCanvas = useRef(null)
  const queryClient = useQueryClient()
  const [firma, setFirma] = useState(null)

  const clearSignature = () => {
    sigCanvas.current.clear()
  }

  const saveSignature = () => {
    const signatureData = sigCanvas.current.toDataURL('image/png')
    const signatureFile = base64ToFile(signatureData, 'firma.png')
    setFirma(signatureFile)

    toast.success('Firma guardada')
  }

  const createMutation = useMutation({
    mutationFn: createJugador,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['data-jugadores'] })
      toast.success('Registro agregado')
      Swal.close()
    },
    onError: () => {
      Swal.close()
      throw new Error('Error al crear jugador')
    }
  })

  const onSubmit = async (data) => {
    if (firma === null) {
      toast.warning('La firma es obligatoría.')
      return
    }

    Swal.fire({
      title:
        '<h2 style="font-family: "sans-serif";">Guardando registro, por favor espere...</h2>',
      allowEscapeKey: false,
      allowOutsideClick: false,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      }
    })

    const newData = {
      ...data,
      firma
    }

    try {
      const res = await createMutation.mutateAsync(newData)
      await queryClient.invalidateQueries({ queryKey: ['data-jugadores'] })
      toast.success('¡Jugador registrado exitosamente!')
      return res
    } catch (err) {
      const msg = err?.message || 'Error al crear jugador'
      toast.error(msg)
      throw err
    } finally {
      Swal.close()
    }
  }

  return {
    onSubmit,
    firma,
    sigCanvas,
    clearSignature,
    saveSignature
  }
}
