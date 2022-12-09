import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    overflow-x: hidden;
    font-family: 'Josefin Sans', 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.body};
  }

  img {
    width: 100%;
  }
`
