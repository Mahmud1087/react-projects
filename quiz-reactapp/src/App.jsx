import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
function App() {
  const {
    loading,
    waiting,
    nextQuestion,
    checkAnswer,
    index,
    correct,
    questions,
  } = useGlobalContext()

  if (waiting) {
    return <SetupForm />
  }
  if (loading) {
    return <Loading />
  }

  const { question, correct_answer, incorrect_answers } = questions[index]

  // const allAnswers = [...incorrect_answers, correct_answer]
  let answers = [...incorrect_answers]
  const randomNumber = Math.floor(Math.random() * 4)
  if (randomNumber === 3) {
    answers.push(correct_answer)
  } else {
    answers.push(answers[randomNumber])
    answers[randomNumber] = correct_answer
  }

  return (
    <main>
      <Modal />
      <section className='quiz'>
        <p className='correct-answers'>
          correct answers : {correct}/{index}
        </p>
        <article className='container'>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className='btn-container'>
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className='answer-btn'
                  dangerouslySetInnerHTML={{ __html: answer }}
                  onClick={() => checkAnswer(correct_answer === answer)}
                />
              )
            })}
          </div>
          <button className='next-question' onClick={nextQuestion}>
            next question
          </button>
        </article>
      </section>
    </main>
  )
}

export default App
