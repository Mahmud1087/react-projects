import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }
  const openSideBar = () => {
    setIsSidebarOpen(true)
  }
  const closeSideBar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        openModal,
        closeModal,
        openSideBar,
        closeSideBar,
        isModalOpen,
        isSidebarOpen,
      }}>
      {children}
    </AppContext.Provider>
  )
}

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext }
