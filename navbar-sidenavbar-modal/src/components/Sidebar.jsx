import React from 'react'
import logo from '../assets/logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './sidebarModalData'
import { useGlobalContext } from './sidebarModalContext'

const Sidebar = () => {
  const { closeSideBar, isSidebarOpen } = useGlobalContext()

  return (
    <section
      className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <img src={logo} alt='coding addict' className='logo' />
        <button className='close-btn' onClick={closeSideBar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, text, icon, url } = link
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className='social-icons'>
        {social.map((socials) => {
          const { id, url, icon } = socials
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Sidebar
