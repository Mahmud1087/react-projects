import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const { closeModal, isModalOpen } = useGlobalContext()
  return (
    <div className={isModalOpen ? 'modal-container isOpen' : 'modal-container'}>
      <div className='modal-content'>
        <h3>congrats!</h3>
        <button className='close-btn' onClick={closeModal}>
          play again
        </button>
      </div>
    </div>
  )
}

export default Modal
