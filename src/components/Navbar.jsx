import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import DarkModeToggle from './DarkModeToggle'

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <AppBar position="static" sx={{ zIndex: 1201 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          React Dashboard
        </Typography>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </Toolbar>
    </AppBar>
  )
}
