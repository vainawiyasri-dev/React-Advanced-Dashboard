import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../features/counterSlice'
import { Box, Button, Typography } from '@mui/material'

function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const handleIncrement = useCallback(() => dispatch(increment()), [dispatch])
  const handleDecrement = useCallback(() => dispatch(decrement()), [dispatch])
  const handleReset = useCallback(() => dispatch(reset()), [dispatch])

  return (
   <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
  <Button variant="contained" onClick={() => dispatch(increment())}>
    Increment
  </Button>

  <Button variant="contained" onClick={() => dispatch(decrement())}>
    Decrement
  </Button>

  <Button variant="outlined" onClick={() => dispatch(reset())}>
    Reset
  </Button>
</Box>

  )
}

export default React.memo(Counter)
