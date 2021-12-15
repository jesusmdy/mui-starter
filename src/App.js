import {createTheme, ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Home from './components/Home'
import {Router} from '@reach/router'
const theme = createTheme({
  palette: {
    type: 'dark'
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h1>React, Reach Router & MUI Starter Pack</h1>
      <Router>
        <Home path="/" />
      </Router>
    </ThemeProvider>
  )
}

export default App
