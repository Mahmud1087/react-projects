import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { colors } from './components/colors'
import { GlobalStyles } from './components/styles/Global.styled'

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const theme = {
    body: isDarkMode ? colors.veryDarkBlue : colors.veryLightGrayishBlue,
    header_ItemBoxBG: isDarkMode
      ? colors.veryDarkDesaturatedBlue
      : colors.veryLightGray,
    itemTexts: isDarkMode
      ? colors.lightGrayishBlue2
      : colors.veryDarkGrayishBlue,
    itemCompleted: isDarkMode
      ? colors.DarkGrayishBlue2
      : colors.DarkGrayishBlue,
    checkerBorder_ItemBottomBorder: isDarkMode
      ? colors.veryDarkGrayishBlue
      : colors.lightGrayishBlue,
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h2>Hello</h2>
    </ThemeProvider>
  )
}
