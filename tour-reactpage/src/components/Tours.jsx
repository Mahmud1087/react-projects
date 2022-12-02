import Tour from './Tour'

const Tours = ({ tour, setTour }) => {
  return (
    <>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>
      <Tour tour={tour} setTour={setTour} />
    </>
  )
}

export default Tours
