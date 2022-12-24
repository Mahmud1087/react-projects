import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './sidebarModalContext'

const Modal = () => {
  const { closeModal, isModalOpen } = useGlobalContext()
  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}>
      <section className='modal-container'>
        <div className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </div>
        <h3>modal content</h3>
      </section>
    </div>
  )
}

export default Modal
