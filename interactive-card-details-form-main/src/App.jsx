import { ThemeProvider } from 'styled-components'
import Body from './components/Body'
import GlobalStyles from './components/styles/Global'

function App() {
  const theme = {
    colors: {
      // primary
      activeInputBorder:
        'linear-gradient(hsl(249, 99%, 64%), hsl(278, 94%, 30%))',
      inputErrors: 'hsl(0, 100%, 66%)',

      // Neutral
      white: 'hsl(0, 0%, 100%)',
      lightGrayishViolet: 'hsl(270, 3%, 87%)',
      darkGrayishViolet: 'hsl(279, 6%, 55%)',
      veryDarkViolet: 'hsl(278, 68%, 11%)',
    },
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Body />
      </>
    </ThemeProvider>
  )
}

export default App
