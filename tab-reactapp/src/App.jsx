import { useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { data } from './data'
// import { data } from './data'

function App() {
  const [personData, setPersonData] = useState(data)
  const [value, setValue] = useState(0)
  const { title, dates, duties, company } = personData[value]

  return (
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {personData.map((button, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}>
                {button.company}
              </button>
            )
          })}
        </div>
        <div className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div className='job-desc' key={index}>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
          <button className='btn'>more info</button>
        </div>
      </div>
    </section>
  )
}

export default App
