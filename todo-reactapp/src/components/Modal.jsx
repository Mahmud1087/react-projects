import { useEffect } from 'react'
import { PopUpModal } from './styles/Modal.styled'

export default function Modal({ modalContent, closeModal }) {
  useEffect(() => {
    setTimeout(() => {
      closeModal()
    }, 3000)
  })

  return <PopUpModal>{modalContent}</PopUpModal>
}
