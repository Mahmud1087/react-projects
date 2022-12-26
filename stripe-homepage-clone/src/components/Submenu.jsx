import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext()
  const container = useRef(null)

  useEffect(() => {
    const submenu = container.current
    const { btnCenter, btnBottom } = location
    submenu.style.left = `${btnCenter}px`
    submenu.style.top = `${btnBottom}px`
  }, [location])
  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}>
      <section>
        <h4>{page}</h4>
        <div
          className={`${
            links.length === 2 ? 'submenu-center col-2' : 'submenu-center col-3'
          }`}>
          {links.map((link, index) => {
            const { label, url, icon } = link
            return (
              <a href={url} key={index}>
                {icon}
                {label}
              </a>
            )
          })}
        </div>
      </section>
    </aside>
  )
}

export default Submenu
