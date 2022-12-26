import React, { useState, useContext } from 'react'
import sublinks from './data'

export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({ page: '', links: [] })

  const openMenu = () => {
    setIsMenuOpen(true)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const openSubmenu = (text, coord) => {
    const page = sublinks.find((link) => link.page === text)
    setPage(page)
    setLocation(coord)
    setIsSubmenuOpen(true)
  }
  const closeSubmenu = () => {
    setIsSubmenuOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        isMenuOpen,
        location,
        page,
        openMenu,
        closeMenu,
        openSubmenu,
        closeSubmenu,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
