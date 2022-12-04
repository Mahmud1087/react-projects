import { useState } from 'react'
import data from './components/data'
import SingleQuestion from './components/Question'

function App() {
  return (
    <main>
      <div className='container'>
        <h3>Questions and answers about login</h3>
        <section>
          {data.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            )
          })}
        </section>
      </div>
    </main>
  )
}

export default App
