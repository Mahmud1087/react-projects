import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import SingleMovie from './SingleMovie'
// import Movie from './SingleMovie'

// const myKey = 'http://www.omdbapi.com/?i=tt3896198&apikey=1592c060'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie/:id' element={<SingleMovie />} />
    </Routes>
  )
}

export default App
