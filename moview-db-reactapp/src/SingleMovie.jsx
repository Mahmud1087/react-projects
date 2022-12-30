import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const SingleMovie = () => {
  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState({})
  const { id } = useParams()

  async function fetchMovie() {
    const response = await fetch(`${API_ENDPOINT}&i=${id}`)
    const data = await response.json()
    setMovie(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchMovie()
  }, [])

  const { Title: title, Year: year, Plot: plot, Poster: poster } = movie

  if (loading) {
    return <div className='loading'></div>
  }

  if (error.show) {
    return (
      <div className='page-error'>
        <h1>{error.msg}</h1>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    )
  }

  return (
    <section className='single-movie'>
      <img src={poster === 'N/A' ? url : poster} alt={title} />
      <div className='single-movie-info'>
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to='/' className='btn'>
          back home
        </Link>
      </div>
    </section>
  )
}

export default SingleMovie
