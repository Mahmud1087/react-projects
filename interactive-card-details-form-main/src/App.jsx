import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Body from './components/Body'
import GlobalStyles from './components/styles/Global'

function App() {
  const [isFilled, setIsFilled] = useState(false)
  const [error, setError] = useState(false)
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardName: '',
    cardExpiryMonth: '',
    cardExpiryYear: '',
    cvcNumber: '',
  })

  const theme = {
    colors: {
      // primary
      // activeInputBorder:
      // 'linear-gradient(hsl(249, 99%, 64%), hsl(278, 94%, 30%))',
      inputBorder: error ? 'hsl(0, 100%, 66%)' : 'hsl(249, 99%, 64%)',

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
        <Body
          cardDetails={cardDetails}
          setCardDetails={setCardDetails}
          isFilled={isFilled}
          setIsFilled={setIsFilled}
          error={error}
          setError={setError}
        />
      </>
    </ThemeProvider>
  )
}

export default App
