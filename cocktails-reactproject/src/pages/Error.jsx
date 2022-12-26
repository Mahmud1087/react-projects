import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <aside className='error-page'>
      <div className='error-container'>
        <h3>Oops! It's a dead end</h3>
        <Link to='/' className='btn-primary'>
          back home
        </Link>
      </div>
    </aside>
  )
}

export default Error
