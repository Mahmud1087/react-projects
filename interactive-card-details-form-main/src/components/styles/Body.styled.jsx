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
  gap: 1.5rem;
`

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
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

export const Button = styled.button`
  width: 100%;
  color: white;
  background: ${({ theme }) => theme.colors.veryDarkViolet};
  border-radius: 5px;
  padding: 0.8rem 0;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
`

export const Attribution = styled.div`
  font-size: 11px;
  text-align: center;

  a {
    color: hsl(228, 45%, 44%);
  }
`
