import React from 'react'
import Modal from './components/Modal'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import '../src/App.css'

function SidebarModalApp() {
  return (
    <>
      <Home />
      <Sidebar />
      <Modal />
    </>
  )
}

export default SidebarModalApp
