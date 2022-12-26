import React from 'react'
import logo from '../assets/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { openMenu, openSubmenu, closeSubmenu } = useGlobalContext()

  const displaySubmenu = (e) => {
    const pageContent = e.target.textContent
    const pageCordinate = e.target.getBoundingClientRect()
    const { left, right, bottom } = pageCordinate
    const btnCenter = (left + right) / 2
    const btnBottom = bottom - 3
    openSubmenu(pageContent, { btnCenter, btnBottom })
  }

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <section className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' className='nav-logo' />
          <button className='btn toggle-btn' onClick={openMenu}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>sign in</button>
      </section>
    </nav>
  )
}

export default Navbar
