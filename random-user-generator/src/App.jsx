import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function App() {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({})
  const [placeholder, setPlaceholder] = useState('name')
  const [details, setDetails] = useState('sometext')

  async function fetchUser() {
    setLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    const person = data.results[0]
    const { first, last } = person.name
    const { email, phone } = person
    const { age } = person.dob
    const { name: strName, number: strNumber } = person.location.street
    const { password, uuid } = person.login
    const { large } = person.picture

    const users = {
      name: `${first} ${last}`,
      email,
      phone,
      age,
      street: `${strNumber} ${strName}`,
      password,
      uuid,
      large,
    }
    setUser(users)
    setLoading(false)
    setDetails(users.name)
    setPlaceholder('name')
  }

  useEffect(() => {
    fetchUser()
  }, [])

  function handleButtons(e) {
    if (e.target.classList.contains('icon')) {
      const btnTarget = e.target.dataset.label
      setPlaceholder(btnTarget)
      setDetails(user[btnTarget])
    }
  }

  return (
    <main>
      <div className='block bcg-black'></div>
      <div className='block'>
        <div className='container'>
          <img
            src={(user && user.large) || defaultImage}
            alt={user.name}
            className='user-img'
          />
          <p className='user-title'>My {placeholder} is</p>
          <p className='user-value'>{details}</p>
          <div className='values-list'>
            <button
              className='icon'
              type='button'
              data-label='name'
              onMouseOver={handleButtons}>
              <FaUser />
            </button>
            <button
              className='icon'
              type='button'
              data-label='email'
              onMouseOver={handleButtons}>
              <FaEnvelopeOpen />
            </button>
            <button
              className='icon'
              type='button'
              data-label='age'
              onMouseOver={handleButtons}>
              <FaCalendarTimes />
            </button>
            <button
              className='icon'
              type='button'
              data-label='street'
              onMouseOver={handleButtons}>
              <FaMap />
            </button>
            <button
              className='icon'
              type='button'
              data-label='phone'
              onMouseOver={handleButtons}>
              <FaPhone />
            </button>
            <button
              className='icon'
              type='button'
              data-label='password'
              onMouseOver={handleButtons}>
              <FaLock />
            </button>
          </div>
          <button className='btn' onClick={fetchUser}>
            {loading ? 'loading...' : 'random user'}
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
