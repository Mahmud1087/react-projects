import { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Tours from './components/Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [tour, setTour] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json()
        } else {
          throw new Error(res.statusText)
        }
      })
      .then((data) => {
        setIsLoading(false)
        setTour(data)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main>
          <Tours tour={tour} setTour={setTour} />
        </main>
      )}
    </>
  )
}

export default App
