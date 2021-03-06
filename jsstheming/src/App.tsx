import React from 'react';
import { ThemeProvider } from 'react-jss';
import './App.css';
import ThemedBlockUseTheme from './components/themedblock/themedblockusetheme';
import { ThemeSelector } from './components/themeselector/themeselector';

const lightTheme = {
  value: "light",
  colors: {
    background: "#ffffff",
    foreground: "#0c0c0c",
    border: 'cyan'
  },
  images: {
    logo: '/SantiagoPorrasLogo.png'
  }
}
const darkTheme = {
  value: "dark",
  colors: {
    background: "#000000",
    foreground: "#c0c0c0",
    border: 'cyan'
  },
  images: {
    logo: '/SantiagoPorrasLogoWhite.png'
  }
}

function App() {
  const [currentTheme, setCurrentTheme] = React.useState(lightTheme);

  function changeTheme(themeValue: string) {
    if (themeValue === "light")
      setCurrentTheme(lightTheme);
    else
      setCurrentTheme(darkTheme);
  }

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <ThemeSelector currentTheme={currentTheme.value} changeTheme={changeTheme} />
        <ThemedBlockUseTheme />
      </ThemeProvider>
    </>
  )
}

export default App;
