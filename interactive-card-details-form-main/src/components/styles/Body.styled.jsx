import styled from 'styled-components'

export const StyledBody = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const LeftBackgroundDesktop = styled.img`
  position: absolute;
  width: 31.5%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;

  @media screen and (min-width: 320px) and (max-width: 920px) {
    display: none;
  }
`

export const LeftBackgroundMobile = styled.img`
  position: absolute;
  width: 100%;
  height: 35%;
  left: 0;
  top: 0;
  z-index: -1;
  display: none;

  @media screen and (min-width: 320px) and (max-width: 920px) {
    display: block;
  }
`

export const Container = styled.div`
  max-width: 100%;
  width: 76%;
  margin: auto;
`

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
  font-size: 1.5rem;
  letter-spacing: 2.5px;
`

export const CardName = styled.h3`
  position: absolute;
  left: 1.6rem;
  bottom: 2rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.9rem;
  letter-spacing: 2px;
`

export const CardExpDate = styled.h3`
  position: absolute;
  left: 18rem;
  bottom: 2rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.9rem;
  letter-spacing: 2px;
`

export const CardCVC = styled.h3`
  position: absolute;
  left: 22rem;
  top: 6.2rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.9rem;
  letter-spacing: 2px;
`

export const FormSection = styled.form`
  position: absolute;
  right: 13rem;
  width: 30%;
`

export const FormLabel = styled.label``

export const Button = styled.button`
  width: 100%;
  color: white;
  background: ${({ theme }) => theme.colors.veryDarkViolet};
`

export const Attribution = styled.div`
  font-size: 11px;
  text-align: center;

  a {
    color: hsl(228, 45%, 44%);
  }
`
