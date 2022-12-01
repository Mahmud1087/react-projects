import { useState } from 'react'
import reactLogo from '../assets/react.svg'

const Tour = ({ tour, setTour }) => {
  //   const [deleteBtn, setDeleteBtn] = useState(false)

  function handleClick(id) {
    setTour((prevTour) => {
      return prevTour.filter((newTours) => newTours.id !== id)
    })
  }

  const tourInfo = tour.map((tours) => {
    const { id, image, name, info, price } = tours
    return (
      <div className='single-tour' key={id}>
        <img src={image} alt='image1' />
        <footer>
          <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className='tour-price'>${price}</h4>
          </div>
          <p>
            {info} <button>Read More</button>
          </p>
          <button className='delete-btn' onClick={() => handleClick(id)}>
            Not Interested
          </button>
        </footer>
      </div>
    )
  })

  return <>{tourInfo}</>
}

export default Tour
