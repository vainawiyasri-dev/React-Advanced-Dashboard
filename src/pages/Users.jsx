import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { Box, TextField, Button, List, ListItem, Typography } from '@mui/material'

export default function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [search, setSearch] = useState('')
  const [newName, setNewName] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
      .catch(() => setError(true))
  }, [])

  const handleAddUser = useCallback(() => {
    if (!newName.trim()) return
    setUsers(prev => [...prev, { id: prev.length + 1, name: newName }])
    setNewName('')
  }, [newName])

  const filteredUsers = useMemo(() =>
    users.filter(user => user.name.toLowerCase().includes(search.toLowerCase())),
    [users, search]
  )

  if (loading) return <Typography>Loading...</Typography>
  if (error) return <Typography>Error fetching users</Typography>

  return (
    <Box sx={{ maxWidth: 600 }}>
      <Typography variant="h5" gutterBottom>Users</Typography>

      <Box sx={{ display: 'flex', gap: 1, marginBottom: 2 }}>
        <TextField
          label="Search users..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          fullWidth
        />
      </Box>

      <Box sx={{ display: 'flex', gap: 1, marginBottom: 2 }}>
        <TextField
          label="New user name"
          value={newName}
          onChange={e => setNewName(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={handleAddUser}>Add User</Button>
      </Box>

      <List>
        {filteredUsers.map(user => (
          <ListItem key={user.id}>{user.name}</ListItem>
        ))}
      </List>
    </Box>
  )
}
