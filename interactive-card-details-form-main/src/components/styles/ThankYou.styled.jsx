import styled from 'styled-components'

export const Heading = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.veryDarkViolet};
`
export const Paragraph = styled.p`
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 1.2rem;
  color: ${({ theme }) => theme.colors.darkGrayishViolet};
`

export const CompleteIcon = styled.img`
  width: 4.5rem;
  align-items: center;
  margin-bottom: 1rem;
  align-self: center;
`
