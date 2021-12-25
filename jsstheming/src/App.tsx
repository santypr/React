import React from 'react';
import { ThemeProvider } from 'react-jss';
import './App.css';
import ThemedBlock from './components/themedcomponent/themescomponent';
import Button from './components/themedcomponent/themescomponent';
import { ThemeSelector } from './components/themeselector/themeselector';

const lightTheme = {
  value: "light",
  colors: {
    background: "#ffffff",
    foreground: "#0c0c0c",
    border: 'cyan'
  }
}
const darkTheme = {
  value: "dark",
  colors: {
    background: "#000000",
    foreground: "#c0c0c0",
    border: 'cyan'
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
        <ThemedBlock />
      </ThemeProvider>
    </>
  )
}

export default App;
