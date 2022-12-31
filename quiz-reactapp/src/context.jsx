import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const tempUrl =
  'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [inputs, setInputs] = useState({
    amount: 10,
    category: 'sports',
    difficulty: 'easy',
  })

  async function fetchQuestions(url) {
    setWaiting(false)
    setLoading(true)
    const response = await axios.get(url).catch((err) => console.log(err))
    if (response) {
      const data = response.data.results
      if (data.length > 0) {
        setQuestions(data)
        setWaiting(false)
        setLoading(false)
        setError(false)
      } else {
        setError(true)
        setWaiting(true)
      }
    } else {
      setWaiting(true)
    }
  }

  function openModal() {
    setIsModalOpen(true)
  }
  function closeModal() {
    setIsModalOpen(false)
  }

  function handleChange(e) {
    const { name, value } = e.target
    setInputs((oldInputs) => {
      return { ...oldInputs, [name]: value }
    })
  }

  function nextQuestion() {
    setIndex((oldIndex) => {
      const newIndex = oldIndex + 1
      if (newIndex > questions.length - 1) {
        openModal()
        return 0
      }
      return newIndex
    })
  }

  function checkAnswer(value) {
    if (value) {
      setCorrect((oldCorrect) => oldCorrect + 1)
    }
    nextQuestion()
  }

  function handleSubmit(e) {
    e.preventDefault()
    const { amount, category, difficulty } = inputs

    const url = `${API_ENDPOINT}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`
    fetchQuestions(url)
  }

  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        questions,
        index,
        error,
        correct,
        isModalOpen,
        inputs,
        checkAnswer,
        nextQuestion,
        handleChange,
        setIsModalOpen,
        handleSubmit,
        openModal,
        closeModal,
      }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
