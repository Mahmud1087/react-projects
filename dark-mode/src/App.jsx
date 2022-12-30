import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

const localStorageTheme = () => {
  let theme = 'light-theme'
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}

function App() {
  const [theme, setTheme] = useState(localStorageTheme())

  const handleToggle = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <main>
      <div className='nav-center'>
        <h1>Overreacted</h1>
        <button className='btn' onClick={handleToggle}>
          toggle
        </button>
      </div>
      <div className='articles'>
        {data.map((article) => {
          return <Article key={article.id} {...article} />
        })}
      </div>
    </main>
  )
}

export default App
