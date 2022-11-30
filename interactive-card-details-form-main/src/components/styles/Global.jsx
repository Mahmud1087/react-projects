import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 1.125rem;
        font-weight: 500;
    }
`

export default GlobalStyles
