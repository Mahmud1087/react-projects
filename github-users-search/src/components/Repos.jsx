import React from 'react'
import styled from 'styled-components'
import { GithubContext } from '../context/context'
import { Pie, Column, Bar, Doughnut } from './Charts'
const Repos = () => {
  const { repos } = React.useContext(GithubContext)
  let languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item
    if (!language) return total
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count }
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      }
    }
    return total
  }, {})

  // most used languages
  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value
    })
    .slice(0, 5)

  // most stars per language
  const mostStars = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value
    })
    .map((item) => {
      return { ...item, value: item.stars }
    })
    .slice(0, 5)

  let { stars } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name } = item
      total.stars[stargazers_count] = { label: name, value: stargazers_count }
      return total
    },
    { stars: {} }
  )

  stars = Object.values(stars).slice(-5).reverse()

  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Pie data={mostUsed} />
        <Column data={stars} />
        <Doughnut data={mostStars} />
        {/* <Bar data={forks}/> */}
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`

export default Repos
