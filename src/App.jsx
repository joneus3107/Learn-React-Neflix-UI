import { useState } from "react"
import { RouterProvider } from "react-router"
import router from './app/router'
import { ThemeContext } from "./contexts/ThemeContext"
import { CssBaseline, ThemeProvider, StyledEngineProvider } from "@mui/material"
import netflixTheme from "./theme"
import "./App.css"



function App() {
  const [user, setUser] = useState(() => {
    const savedUser = sessionStorage.getItem('user');

    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [searchParam, setSearchParam] = useState('')

  return (
    <ThemeContext.Provider value={{user, setUser, searchParam, setSearchParam}}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={netflixTheme}>
          <CssBaseline/>
          <RouterProvider router={router} />
        </ThemeProvider>
      </StyledEngineProvider>
    </ThemeContext.Provider>
  )
}

export default App
