import React, { useEffect, useState } from 'react'
import Counter from '../components/Counter'
import { Typography, Box, Card, CardContent } from '@mui/material'

export default function Dashboard() {
  const [userCount, setUserCount] = useState(0)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUserCount(data.length))
  }, [])

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', marginTop: 2 }}>
        <Card sx={{ minWidth: 200 }}>
          <CardContent>
            <Typography variant="h6">Counter Value</Typography>
            <Counter />
          </CardContent>
        </Card>

        <Card sx={{ minWidth: 200 }}>
          <CardContent>
            <Typography variant="h6">Total Users</Typography>
            <Typography variant="h4">{userCount}</Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}
