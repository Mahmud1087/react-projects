import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { colors } from './components/colors';
import {
  Container,
  DarkModeBgDesktop,
  DarkModeBgMobile,
  DarkModeIcon,
  DateContainer,
  Header,
  Heading,
  LightModeBgDesktop,
  LightModeBgMobile,
  LightModeIcon,
} from './components/styles/App.styled';
import { GlobalStyles } from './components/styles/Global.styled';
import lightModeBGMobile from './assets/bg-mobile-light.jpg';
import darkModeBGMobile from './assets/bg-mobile-dark.jpg';
import lightModeBGDesktop from './assets/bg-desktop-light.jpg';
import darkModeBGDesktop from './assets/bg-desktop-dark.jpg';
import lightModeIcon from './assets/icon-moon.svg';
import darkModeIcon from './assets/icon-sun.svg';
import TodoBody from './components/TodoBody';

const saveTheme = (theme) => {
  localStorage.setItem('darkTheme', JSON.stringify(theme));
};

const defaultTheme = JSON.parse(localStorage.getItem('darkTheme') || false);

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(defaultTheme);

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
    date: isDarkMode ? colors.brightBlue : colors.blackColor,
    checkerBorder_ItemBottomBorder: isDarkMode
      ? colors.veryDarkGrayishBlue
      : colors.lightGrayishBlue,
    blue: isDarkMode ? colors.purple : colors.brightBlue,
  };

  useEffect(() => {
    saveTheme(isDarkMode);
  }, [isDarkMode]);

  const createDate = () => new Date();
  const todaysDate = () => createDate().toDateString();

  // useEffect(() => {
  //   const date = setInterval(() => {
  //     createDate();
  //   }, 1000);
  //   clearInterval(date);
  // }, [createDate().getSeconds()]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {isDarkMode ? (
        <DarkModeBgMobile src={darkModeBGMobile} />
      ) : (
        <LightModeBgMobile src={lightModeBGMobile} />
      )}
      {isDarkMode ? (
        <DarkModeBgDesktop src={darkModeBGDesktop} />
      ) : (
        <LightModeBgDesktop src={lightModeBGDesktop} />
      )}
      <Container>
        <Header>
          <Heading>TODO</Heading>

          {isDarkMode ? (
            <DarkModeIcon
              src={darkModeIcon}
              onClick={() => setIsDarkMode(!isDarkMode)}
            />
          ) : (
            <LightModeIcon
              src={lightModeIcon}
              onClick={() => setIsDarkMode(!isDarkMode)}
            />
          )}
        </Header>
        <TodoBody />
      </Container>
      <DateContainer>{todaysDate()}</DateContainer>
    </ThemeProvider>
  );
}
