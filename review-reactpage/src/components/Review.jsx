import { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import reactLogo from '../assets/react.svg'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  function checkNumber(number) {
    if (number < 0) return people.length - 1
    if (number > people.length - 1) return 0
    return number
  }

  function nextBtn() {
    setIndex((prevIndex) => {
      let newIndex = prevIndex + 1
      return checkNumber(newIndex)
    })
  }

  function prevBtn() {
    setIndex((prevIndex) => {
      let newIndex = prevIndex - 1
      return checkNumber(newIndex)
    })
  }

  function random() {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) randomNumber = index + 1
    setIndex(checkNumber(randomNumber))
  }

  return (
    <>
      <div className='review'>
        <div className='img-container'>
          <img src={reactLogo} className='person-img' />
          <div className='quote-icon'>
            <FaQuoteRight />
          </div>
        </div>

        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>

        <div className='button-container'>
          <button className='prev-btn' onClick={prevBtn}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextBtn}>
            <FaChevronRight />
          </button>
        </div>
        <button className='random-btn' onClick={random}>
          suprise me
        </button>
      </div>
    </>
  )
}

export default Review
