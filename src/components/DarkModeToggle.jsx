import React from 'react'
import { Button } from '@mui/material'

export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <Button color="inherit" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </Button>
  )
}
