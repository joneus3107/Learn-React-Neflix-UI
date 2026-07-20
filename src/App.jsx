import { useState } from "react"
import { RouterProvider } from "react-router"
import router from './app/router'
import { UserContext } from "./contexts/UserContext"
import { CssBaseline, ThemeProvider, StyledEngineProvider } from "@mui/material"
import netflixTheme from "./theme"



function App() {
  const [user, setUser] = useState(() => {
  const savedUser = sessionStorage.getItem('user');

  return savedUser ? JSON.parse(savedUser) : null;
});

  return (
    <UserContext.Provider value={{user, setUser}}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={netflixTheme}>
          <CssBaseline/>
          <RouterProvider router={router} />
        </ThemeProvider>
      </StyledEngineProvider>
    </UserContext.Provider>
  )
}

export default App
