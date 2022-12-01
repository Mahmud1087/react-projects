import Tour from './Tour'

const Tours = ({ tour, setTour }) => {
  return (
    <>
      <h2>Our Tours</h2>
      <div className='underline'></div>
      <Tour tour={tour} setTour={setTour} />
    </>
  )
}

export default Tours
