import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

function App() {
  return (
    <main>
      <div className='nav-center'>
        <h1>Overreacted</h1>
        <button className='btn'>toggle</button>
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
