import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body {
        width: 100%;
        overflow-x: hidden;
        font-family: 'Anton', sans-serif;
    }
`

export default GlobalStyles