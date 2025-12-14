import React, { useState, useMemo } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'

function Main() {
  const [darkMode, setDarkMode] = useState(false)

  const theme = useMemo(() =>
    createTheme({ palette: { mode: darkMode ? 'dark' : 'light' } }),
    [darkMode]
  )

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App darkMode={darkMode} setDarkMode={setDarkMode} />
      </ThemeProvider>
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
