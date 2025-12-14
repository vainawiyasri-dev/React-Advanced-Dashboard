// src/App.jsx
import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import { Box } from '@mui/material'

// Lazy load Users and Settings pages
const Users = lazy(() => import('./pages/Users'))
const Settings = lazy(() => import('./pages/Settings'))

export default function App({ darkMode, setDarkMode }) {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1 }}>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Box sx={{ padding: 3 }}>
            <Suspense fallback={<p>Loading...</p>}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Suspense>
          </Box>
        </Box>
      </Box>
    </Router>
  )
}
