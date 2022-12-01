import styled from 'styled-components'

export const CardSection = styled.div`
  position: relative;
  background-color: red;
  /* display: flex;
  flex-direction: column;
  row-gap: 1.5rem; */
  width: 50%;
`

export const FrontCard = styled.img`
  position: absolute;
  width: 70%;
  bottom: 0;
  left: 0;
  margin-bottom: 0.7rem;
`

export const BackCard = styled.img`
  position: absolute;
  width: 70%;
  top: 0;
  right: 5rem;
  margin-top: 0.7rem;
`

export const CardLogo = styled.img`
  position: absolute;
  bottom: 9.8rem;
  width: 4rem;
  left: 1.6rem;
`

export const CardNumber = styled.h1`
  position: absolute;
  left: 1.6rem;
  bottom: 4.5rem;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  font-size: 1.4rem;
  letter-spacing: 2.5px;
`

export const CardName = styled.h3`
  position: absolute;
  left: 1.6rem;
  bottom: 2rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.7rem;
  letter-spacing: 2px;
`

export const CardExpDate = styled.h3`
  position: absolute;
  left: 18rem;
  bottom: 2rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.7rem;
  letter-spacing: 2px;
`

export const CardCVC = styled.h3`
  position: absolute;
  left: 22rem;
  top: 6.3rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.7rem;
  letter-spacing: 2px;
`
