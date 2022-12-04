import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Question = ({ title, info }) => {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    setIsOpen((prevOpen) => !prevOpen)
  }

  return (
    <div className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={handleClick}>
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{isOpen && info}</p>
    </div>
  )
}

export default Question
