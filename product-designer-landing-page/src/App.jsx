import { useState } from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./components/styles/Global"
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FlexRow } from "./components/styles/Flex.styled"
import Hero from "./components/Hero"
import { SwitchMode } from "./components/styles/Hero.styled";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Footer from "./components/Footer";



function App() {

  const [darkMode, setDarkMode] = useState(false)

  const theme = {
    backgroundColors: {
      body: darkMode ? '#0B0B0B' : '#F4EFFE',
      footer: darkMode ? '#D3BFF9' : '#292929',
      skillsBox: darkMode ? '#292929' : '#E9DFFC',
      skillsPercentage: darkMode ? 'linear-gradient(90deg, #FA709A 0%, #FEE140 100%);' : '#292929',
      buttonbg: darkMode ? '#E9DFFC' : '#784DC7',
      navbarBorderBottom: darkMode ? '#F4EFFE' : '#784DC7'
    },
    colors: {
      heroTextColor: darkMode ? 'white' : '#925FF0',
      aboutTextColor: darkMode ? 'white' : '#292929',
      buttonTextColor: darkMode ? '#784DC7' : '#E9DFFC'
    }
  }


  function switchMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Hero darkMode = {darkMode} />
        <SwitchMode onClick={switchMode}>
            {darkMode ? <MdOutlineLightMode size="2em" color="white" /> : <MdDarkMode size="2em" /> }
        </SwitchMode>
        <AboutMe />
        <Skills />
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App
