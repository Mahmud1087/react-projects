import React, { useState, useEffect } from 'react'
import mockUser from './mockData.js/mockUser'
import mockRepos from './mockData.js/mockRepos'
import mockFollowers from './mockData.js/mockFollowers'

import axios from 'axios'

const rootUrl = 'https://api.github.com'

const GithubContext = React.createContext()

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser)
  const [followers, setFollowers] = useState(mockFollowers)
  const [repos, setRepos] = useState(mockRepos)

  const [isLoading, setIsLoading] = useState(false)
  const [request, setRequest] = useState(0)
  const [error, setError] = useState({ show: false, msg: '' })

  const searchGithubUser = async (user) => {
    toggleError()
    setIsLoading(true)
    const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
      console.log(err)
    )
    if (response) {
      setGithubUser(response.data)
      const { repos_url, followers_url } = response.data

      await Promise.allSettled([
        axios(`${repos_url}?per_page=100`),
        axios(`${followers_url}`),
      ])
        .then((result) => {
          const [repos, followers] = result
          if (repos.status === 'fulfilled') {
            setRepos(repos.value.data)
          }
          if (followers.status === 'fulfilled') {
            setFollowers(followers.value.data)
          }
        })
        .catch((err) => console.log(err))
    } else {
      toggleError(true, 'there is no user with that username')
    }
    checkRequest()
    setIsLoading(false)
  }

  const checkRequest = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data
        setRequest(remaining)
        if (remaining === 0) {
          toggleError(true, 'sorry, you have exceeded your hourly rate limit!')
        }
      })
      .catch((error) => console.log(error))
  }

  function toggleError(show = false, msg = '') {
    setError({ show, msg })
  }

  useEffect(checkRequest, [])

  useEffect(() => {
    searchGithubUser('Mahmud1087')
  }, [])

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        followers,
        repos,
        isLoading,
        searchGithubUser,
        request,
        error,
      }}>
      {children}
    </GithubContext.Provider>
  )
}

export { GithubContext, GithubProvider }
