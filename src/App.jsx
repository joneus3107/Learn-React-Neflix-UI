import { useState } from "react"
import { UserContext } from "./contexts/UserContext"
import { CssBaseline, ThemeProvider, StyledEngineProvider } from "@mui/material"
import netflixTheme from "./theme"
import { UserList } from "./pages"



function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{user, setUser}}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={netflixTheme}>
          <CssBaseline/>
          <UserList/>
        </ThemeProvider>
      </StyledEngineProvider>
    </UserContext.Provider>
  )
}

export default App
