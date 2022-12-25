import React, { useState, useRef, useEffect } from 'react'

const Submenu = () => {
  return (
    <aside className='submenu show'>
      <section>
        <h4>products</h4>
        <div className='submenu-center col-3'>
          <a href='#'>payment</a>
          <a href='#'>terminal</a>
          <a href='#'>connect</a>
        </div>
      </section>
    </aside>
  )
}

export default Submenu
